import React, { useContext, useEffect, useState } from 'react';
import S from './style.js';
import Slide from './Slide.jsx';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CommunityContext } from '../../../context/communityContext.js';
import FollowBtn from './FollowBtn';

const UserPost = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const { id } = useParams();
    const { currentUser } = useSelector((state) => state.user);
    const memberId = currentUser.id;

    // 내가 지금 누른 게시글
    const { communityState } = useContext(CommunityContext);
    const { communites } = communityState;

    const foundPost = communites?.find((cm) => String(cm.id) === String(id)) || {};  // 기본값을 빈 객체로 설정

    // 댓글 조회
    useEffect(() => {
        const fetchComments = async () => {
            const response = await fetch(`http://localhost:10000/comments/list/${id}`);
            if (response.ok) {
                const data = await response.json();
                // 댓글을 최신순으로 정렬 (createdAt을 기준으로 내림차순)
                const sortedComments = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setComments(sortedComments);
            } else {
                console.error('댓글 조회 실패');
            }
        };

        fetchComments();
    }, [id, foundPost]);

    // 댓글 추가
    const handleCommentSubmit = async () => {
        if (newComment.trim() === '') return;

        const token = localStorage.getItem('jwtToken');
        if (!token) {
            return alert("로그인 후 이용해주세요.");
        }

        const response = await fetch(`http://localhost:10000/comments/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                memberId: memberId,
                postId: id,
                commentContent: newComment,
            })
        });

        if (response.ok) {
            const updatedComments = await fetch(`http://localhost:10000/comments/list/${id}`);
            if (updatedComments.ok) {
                const data = await updatedComments.json();
                // 댓글을 최신순으로 정렬
                const sortedComments = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setComments(sortedComments);
                setNewComment(''); // 댓글 입력란 초기화
            } else {
                alert('댓글 조회 실패');
            }
        } else {
            alert('댓글 추가 실패');
        }
    };

    // 댓글 삭제
    const handleCommentDelete = async (commentId) => {
        const comment = comments.find((comment) => comment.id === commentId);

        if (comment.memberId !== memberId) {
            return alert('본인 댓글만 삭제할 수 있습니다.');
        }

        const response = await fetch(`http://localhost:10000/comments/delete/${commentId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            const updatedComments = comments.filter(comment => comment.id !== commentId);
            setComments(updatedComments);
        } else {
            alert('댓글 삭제 실패');
        }
    };

    return (
        <div>
            <S.MyPostPage>
                <S.MyPostPageBox>
                    <S.MyPostBox>
                        <S.ProfileBox>
                            <S.MyProfile>
                                <Link to={`/post/list/${id}`}>
                                    <img src="/assets/images/community/default-myProfile.png" alt="프로필" />
                                </Link>
                            </S.MyProfile>
                            {/* foundPost가 없으면 '회원 정보 없음'으로 표시 */}
                            <S.NickName>{foundPost.memberNickName || '회원 정보 없음'}</S.NickName>

                            {/* 팔로우 버튼에 targetUserId 전달 */}
                            {foundPost && <FollowBtn targetUserId={foundPost.memberId} />}
                        </S.ProfileBox>
                        <Slide />
                        <S.MyPostUnderBox>
                            <S.PostUnder>
                                {/*<HeartBtn id={id} type={"community"} />*/}
                                <S.LikeNumber></S.LikeNumber>
                                {/*<S.DotBtn><button><img src="/assets/images/community/dots.png" alt="삼점메뉴" /></button></S.DotBtn>*/}
                            </S.PostUnder>
                            {foundPost ? (
                                <S.PostContent>
                                    {foundPost.postContent}
                                </S.PostContent>
                            ) : (
                                <S.PostContent>게시글을 찾을 수 없습니다.</S.PostContent>
                            )}
                        </S.MyPostUnderBox>
                    </S.MyPostBox>

                    <S.CommentDiv>
                        <S.CommentNumber>
                            <S.Comment>댓글</S.Comment>
                            <S.Comment>{comments.length}</S.Comment>
                        </S.CommentNumber>
                        <S.MyComment>
                            <S.MyProfile>
                                <img src="/assets/images/community/default-myProfile.png" alt="프로필" />
                            </S.MyProfile>
                            <S.InputContainer>
                                <input
                                    onChange={(e) => setNewComment(e.target.value)}
                                    value={newComment}
                                    placeholder='댓글을 입력해주세요.' />
                                <button onClick={handleCommentSubmit}>완료</button>
                            </S.InputContainer>
                        </S.MyComment>
                        <S.Scroll>
                            {comments.map((comment) => (
                                <S.CommentBox key={comment.id}>
                                    <Link to={`/post/list/${id}`}>
                                        <img src="/assets/images/community/default-profile.png" alt="프로필" />
                                    </Link>
                                    <S.CommentText>
                                        <S.NickName>{comment.memberNickname}</S.NickName>
                                        <p>{comment.commentContent}</p>
                                    </S.CommentText>
                                    <S.DotBtn>
                                        <button onClick={() => handleCommentDelete(comment.id)}>
                                            <img src="/assets/images/community/trash.jpg" alt="삭제아이콘" />
                                        </button>
                                    </S.DotBtn>
                                </S.CommentBox>
                            ))}
                        </S.Scroll>
                    </S.CommentDiv>
                </S.MyPostPageBox>
            </S.MyPostPage>
        </div>
    );
};

export default UserPost;
