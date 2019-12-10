import{
    Admin,//人事信息汇总
    Index,//公司首页
    Inform,//普通员工信息表
    Login,//登录界面
    NotFound,//404页面
    Setting,//信息设置页面
} from "../pages/index"


export const mainRoutes = [{
    pathname : "/login",
    component : Login
},
{
    pathname:"/index",
    component:  Index
},
{
    pathname : "/404",
    component : NotFound
}]

export const adminRoutes = [{
    pathname : "/admin/personnel",
    component : Admin,
    title : "人事信息汇总",
    // isNav : true,
    // icon : "dashboard"
},{
    pathname : "/admin/inform",
    component : Inform,
    // isNav : false
},{
    pathname : "/admin/setting",
    component : Setting,
    title : "设置",
}]