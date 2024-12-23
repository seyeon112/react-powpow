/*라우팅*/
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import MainContainer from "../pages/main/MainContainer";
import Login from "../pages/login/Login";
import NotFound from "../pages/NotFound";
import LoginContainer from "../pages/login/LoginContainer";
import JoinContainer from "../pages/join/JoinContainer";
import JoinType from "../pages/join/JoinType";
import JoinPhone from "../pages/join/JoinPhone";
import JoinComplete from "../pages/join/JoinComplete";
import SellerJoin from "../pages/join/SellerJoin";
import Join from "../pages/join/Join";
import FindAccountContainer from "../pages/findAccount/FindAccountContainer";
import SellerLayout from "../pages/sellerLayout/SellerLayout";
import SellerProductContainer from "../pages/seller/sellerProduct/SellerProductContainer";
import SellerProductList from "../pages/seller/sellerProduct/SellerProductList";
import SellerProductWrite from "../pages/seller/sellerProduct/SellerProductWrite";
import SellerProductUpdate from "../pages/seller/sellerProduct/SellerProductUpdate";
import SellerInfoContainer from "../pages/seller/sellerInfo/SellerInfoContainer";
import SellerUpdate from "../pages/seller/sellerInfo/SellerUpdate";
import FindType from "../pages/findAccount/FindType";
import FindId from "../pages/findAccount/FindId";
import FindIdComplete from "../pages/findAccount/FindIdComplete";
import FindPasswordType from "../pages/findAccount/FindPasswordType";
import FindPassword from "../pages/findAccount/FindPassword";
import FindPasswordComplete from "../pages/findAccount/FindPasswordComplete";
import ProfileList from "../pages/myhome/myInfo/ProfileList";
import ProfileUpdate from "../pages/myhome/myInfo/ProfileUpdate";
import Notification from "../pages/myhome/myInfo/Notification";
import LikeList from "../pages/myhome/myInfo/LikeList";
import PasswordUpdate from "../pages/myhome/myInfo/PasswordUpdate";
import PasswordUpdateComplete from "../pages/myhome/myInfo/PasswordUpdateComplete";
import MyPetContainer from "../pages/myhome/myPet/MyPetContainer";
import PetList from "../pages/myhome/myPet/PetList";
import PetWrite from "../pages/myhome/myPet/PetWrite";
import ShoppingList from "../pages/myhome/myShopping/ShoppingList";
import Adjustment from "../pages/seller/sellerAdjustment/Adjustment";
import SellerRevenueList from "../pages/seller/sellerRevenue/SellerRevenueList";
import SellerOrderList from "../pages/seller/sellerOrder/SellerOrderList";
import PetsonalContainer from "../pages/petsonal/PetsonalContainer";
import PetsonalMain from "../pages/petsonal/PetsonalMain";
import PetsonalTest from "../pages/petsonal/PetsonalTest";
import PetsonalResult from "../pages/petsonal/PetsonalResult";
import ProductContainer from "../pages/store/product/ProductContainer";
import ProductDetail from "../pages/store/product/ProductDetail";
import StoreContainer from "../pages/store/store/StoreContainer";
import StoreMain from "../pages/store/store/StoreMain";
import Cart from "../pages/store/cart/Cart";
import CommunityContainer from "../pages/community/community/CommunityContainer";
import CommunityMain from "../pages/community/community/CommunityMain";
import PostContainer from "../pages/community/post/PostContainer";
import UserPost from "../pages/community/post/UserPost";
import UserList from "../pages/community/post/UserList";
import PostUpdate from "../pages/community/post/PostUpdate";
import PostWrite from "../pages/community/post/PostWrite";
import AdminLogin from "../pages/admin/adminLogin/AdminLogin";
import BannerContainer from "../pages/admin/banner/BannerContainer";
import BannerList from "../pages/admin/banner/BannerList";
import BannerWrite from "../pages/admin/banner/BannerWrite";
import BannerUpdate from "../pages/admin/banner/BannerUpdate";
import CouponContainer from "../pages/admin/coupon/CouponContainer";
import CouponList from "../pages/admin/coupon/CouponList";
import CouponWrite from "../pages/admin/coupon/CouponWrite";
import CouponUpdate from "../pages/admin/coupon/CouponUpdate";
import MemberContainer from "../pages/admin/member/MemberContainer";
import BuyerList from "../pages/admin/member/BuyerList";
import SellerList from "../pages/admin/member/SellerList";
import UnsubscribeContainer from "../pages/unsubscribe/UnsubscribeContainer";
import Unsubscribe from "../pages/unsubscribe/Unsubscribe";
import UnsubscribeComplete from "../pages/unsubscribe/UnsubscribeComplete";
import AdminLayout from "../pages/adminLayout/AdminLayout";
import MyInfoContainer from "../pages/myhome/myInfo/MyInfoContainer";
import PayContainer from "../pages/store/pay/PayContainer";
import Pay from "../pages/store/pay/Pay";
import PaySuccess from "../pages/store/pay/PaySuccess";
import PayFailed from "../pages/store/pay/PayFailed";
import NoticeContainer from "../pages/admin/notice/NoticeContainer";
import NoticeList from "../pages/admin/notice/NoticeList";
import NoticeUpdate from "../pages/admin/notice/NoticeUpdate";
import NoticeWrite from "../pages/admin/notice/NoticeWrite";
import SellerLogin from "../pages/login/SellerLogin";
import StoreCatContainer from "../pages/store/store/cat/StoreCatContainer";
import StoreDogContainer from "../pages/store/store/dog/StoreDogContainer";
import NoCart from "../pages/store/cart/NoCart";
import PetUpdate from "../pages/myhome/myPet/PetUpdate";
import PetNot from "../pages/myhome/myPet/PetNot";
import NoticeListPage from "../pages/myhome/notice/NoticeListPage";
import Notice from "../pages/myhome/notice/Notice";
import NoticeListAll from "../pages/admin/notice/NoticeListAll";
import PetTestList from "../pages/myhome/myPet/PetTestList";
import RecommendPost from "../pages/community/post/RecommendPost";
import SellerRead from "../pages/seller/sellerInfo/SellerRead";
import Result from "../pages/store/store/search/result";
import StoreDog from "../pages/store/store/dog/StoreDog";
import StoreCat from "../pages/store/store/cat/StoreCat";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MainContainer />
            },
            {
                path: '/myhome',
                element: <MyInfoContainer />,
                children: [
                    {
                        index: true,
                        element: <ProfileList />,
                    },
                    {
                        path: "profile-update",
                        element: <ProfileUpdate />
                    },
                    {
                        path: "notification",
                        element: <Notification />
                    },
                    {
                        path: "likes",
                        element: <LikeList />
                    },
                    {
                        path: "password-update",
                        element: <PasswordUpdate />
                    },
                ]
            },
            {
                path: '/notice',
                element: <NoticeContainer />,
                children: [
                    {
                        index: true,
                        element: <NoticeListPage />,
                    },
                    {
                        path: "list/:id",
                        element: <Notice />
                    },
                ]
            },
            {
                path: '/my-pet',
                element: <MyPetContainer />,
                children: [
                    {
                        index: true,
                        element: <PetList />
                    },
                    {
                        path: "pet-write",
                        element: <PetWrite />
                    },
                    {
                        path: "pet-not",
                        element: <PetNot />
                    },
                    {
                        path: "pet-update/:id",
                        element: <PetUpdate />
                    },
                    {
                        path: "test-list",
                        element: <PetTestList />
                    },
                ]
            },
            {
                path: '/my-shopping',
                element: <ShoppingList />
            },
            {
                path: '/petsonal',
                element: <PetsonalContainer />,
                children: [
                    {
                        index: true,
                        element: <PetsonalMain />,
                    },
                    {
                        path: "test/:id",
                        element: <PetsonalTest />,
                    },
                    {
                        path: "result/:id",
                        element: <PetsonalResult />,
                    },
                ]
            },
            {
                path: 'store/read/:id',
                element: <ProductContainer />,
                children: [
                    {
                        index: true,
                        element: <ProductDetail />
                    }
                ]
            },
            {
                path: '/store',
                element: <StoreContainer />,
                children: [
                    {
                        index: true,
                        element: <StoreMain />
                    },
                ]
            },
            {
                path: 'search/:productName',
                element: <Result />
            },
            {
                path: '/store-dog',
                element: <StoreDogContainer />,
                children : [
                    {
                        index: true,
                        element: <StoreDog />
                    },
                    {
                        path: 'treats',
                        element: <StoreDog />
                    },
                    {
                        path: 'clothes',
                        element: <StoreDog />
                    },
                    {
                        path: 'health-care',
                        element: <StoreDog />
                    },
                ]
            },
            {
                path: '/store-cat',
                element: <StoreCatContainer />,
                children : [
                    {
                        index: true,
                        element: <StoreCat />
                    },
                    {
                        path: 'treats',
                        element: <StoreCat />
                    },
                    {
                        path: 'clothes',
                        element: <StoreCat />
                    },
                    {
                        path: 'health-care',
                        element: <StoreCat />
                    },
                ]
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/no-cart',
                element: <NoCart />,
            },
            {
                path: '/pay',
                element: <PayContainer />,
                children: [
                    {
                        index: true,
                        element: <Pay />
                    },
                    {
                        path: 'success',
                        element: <PaySuccess />
                    },
                    {
                        path: 'failed',
                        element: <PayFailed />
                    },
                ]
            },
            {
                path: '/community',
                element: <CommunityContainer />,
                children: [
                    {
                        index: true,
                        element: <CommunityMain />,
                    }
                ]
            },
            {
                path: '/post',
                element: <PostContainer />,
                children: [
                    {
                        path: "recommend/:postColor",
                        element: <RecommendPost />,
                    },
                    {
                        path: "read/:id",
                        element: <UserPost />,
                    },
                    {
                        path: "list/:memberid",
                        element: <UserList />,
                    },
                    {
                        path: "write",
                        element: <PostWrite />,
                    },
                    {
                        path: "update",
                        element: <PostUpdate />,
                    },
                ]
            },
            {
                path: '/unsubscribe',
                element: <UnsubscribeContainer />,
                children: [
                    {
                        index: true,
                        element: <Unsubscribe />
                    }
                ]
            },
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: '/admin',
                element: <NoticeContainer />,
                children: [
                    {
                        index: true,
                        element: <NoticeListAll />
                    },
                    {
                        path: `list/:id`,
                        element: <NoticeList />
                    },
                    {
                        path: 'update/:id',
                        element: <NoticeUpdate />
                    },
                    {
                        path: 'write',
                        element: <NoticeWrite />
                    },
                ]
            },
            {
                path: 'banner',
                element: <BannerContainer />,
                children: [
                    {
                        index: true,
                        element: <BannerList />
                    },
                    {
                        path: "banner-write",
                        element: <BannerWrite />
                    },
                    {
                        path: "banner-update",
                        element: <BannerUpdate />
                    },
                ]
            },
            {
                path: 'coupon',
                element: <CouponContainer />,
                children: [
                    {
                        index: true,
                        element: <CouponList />
                    },
                    {
                        path: "coupon-write",
                        element: <CouponWrite />
                    },
                    {
                        path: "coupon-update/:id",
                        element: <CouponUpdate />
                    },
                ]
            },
            {
                path: 'member',
                element: <MemberContainer />,
                children: [
                    {
                        index: true,
                        element: <BuyerList />
                    },
                    {
                        path: "seller-list",
                        element: <SellerList />
                    },
                ]
            },
        ]
    },
    {
        path: '/seller',
        element: <SellerLayout />,
        children: [
            {
                path: '/seller',
                element: <SellerProductContainer />,
                children: [
                    {
                        index: true,
                        element: <SellerProductList />,
                    },
                    {
                        path: "product-write",
                        element: <SellerProductWrite />,
                    },
                    {
                        path: "product-update/:id",
                        element: <SellerProductUpdate />,
                    },
                ]
            },
            {
                path: 'seller-info',
                element: <SellerInfoContainer />,
                children: [
                    {
                        index: true,
                        element: <SellerRead />,
                    },
                    {
                        path: "update/:id",
                        element: <SellerUpdate />,
                    },
                ]
            },
            {
                path: 'seller-adjustment',
                element: <Adjustment />,
            },
            {
                path: 'seller-revenue',
                element: <SellerRevenueList />,
            },
            {
                path: 'seller-order',
                element: <SellerOrderList />,
            },
        ]
    },
    {
        path: '/admin-login',
        element: <AdminLogin />
    },
    {
        path: '/login',
        element: <LoginContainer />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: 'seller',
                element: <SellerLogin />,
            }
        ]
    },
    {
        path: '/join',
        element: <JoinContainer />,
        children: [
            {
                index: true,
                element: <JoinType />,
            },
            {
                path: "phone",
                element: <JoinPhone />,
            },
            {
                path: "complete",
                element: <JoinComplete />,
            },
            {
                path: "seller-join",
                element: <SellerJoin />,
            },
            {
                path: "buyer-join",
                element: <Join />,
            },

        ]
    },
    {
        path: '/find',
        element: <FindAccountContainer />,
        children: [
            {
                index: true,
                element: <FindType />,
            },
            {
                path: "find-id/",
                element: <FindId />,
            },
            {
                path: "find-complete",
                element: <FindIdComplete />,
            },
            {
                path: "find-password-type",
                element: <FindPasswordType />,
            },
            {
                path: "find-password",
                element: <FindPassword />,
            },
            {
                path: "find-password-complete",
                element: <FindPasswordComplete />,
            },
        ]
    },
    {
        path: "/myhome/password-update-complete",
        element: <PasswordUpdateComplete />
    },
    {
        path: "/unsubscribe/complete",
        element: <UnsubscribeComplete />
    },
    {
        path: '*',
        element: <NotFound />
    }
],
    {
        future: {
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_relativeSplatPath: true,
            v7_skipActionErrorRevalidation: true,
            v7_startTransition: true
        },
    }
)

export default router