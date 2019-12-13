import{
    Admin,//人事信息汇总
    Index,//公司首页
    Inform,//普通员工信息表
    Login,//登录界面
    NotFound,//404页面
    Setting,//信息设置页面
    // Bian,//人事编辑页
    SettingManaage,
    SettingScientific,
    SettingSett

} from "../pages"

export const settingRoutes =[{
    pathname:"/admin/setting/sett",
    component:SettingSett,
    title:"基本设置",
    isNav:true
},
{
    pathname:"/admin/setting/scientific",
    component:SettingScientific,
    title:"系统管理",
    isNav:true
},
{
    pathname:"/admin/setting/mamaaage",
    component:SettingManaage,
    title:"数据统计",
    isNav:true
}

]

export const mainRoutes = [{
    pathname : "/login",
    component : Login,
    title : "人事信息汇总",
    isNav : true,
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
    isNav : true,
    icon:"unordered-list"
    
},{
    pathname : "/admin/inform",
    component : Inform,
    title:"员工个人信息",
    isNav : true
},{
    pathname : "/admin/setting",
    component : Setting,
    title : "设置",
    isNav : true,
    icon:'setting'
},
// {
//     pathname : "/admin/bian/:id",
//     component : Bian,
//     isNav : false,
// }
]