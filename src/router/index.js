import Vue from "vue";
import VueRouter from "vue-router";
import MyAssets from "../views/MyAssets.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MyAssets",
    component: MyAssets
  },
  {
    path: "/addassets",
    name: "AddAssets",
    component: () =>
      import("../views/AddAssets.vue")
  },
  {
    path: "/assetsdetails",
    name: "AssetsDetails",
    component: () =>
      import("../views/AssetsDetails.vue")
  },
  {
    path: "/editforms",
    name: "EditForms",
    component: () =>
      import("../views/EditForms.vue")
  },
  {
    path: "/reportproblems",
    name: "ReportProblems",
    component: () =>
      import("../views/ReportProblems.vue")
  },
  {
    path:"/yoklerk",
    name:"Yoklerk",
    component:() =>
        import("../views/Yoklerk.vue")
    },


];

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
