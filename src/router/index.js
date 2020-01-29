import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "Home"
    },
    component: () => import("@/views/home/Home.vue"),
    children: [
      {
        path: "",
        name: "",
        redirect: "news"
      },
      {
        path: "news",
        name: "news",
        meta: {
          title: "News"
        },
        component: () => import("@/views/home/News.vue")
      },
      {
        path: "message",
        naem: "message",
        meta: {
          title: "Message"
        },
        component: () => import("@/views/home/Message.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "About"
    },
    component: () => import("@/views/About.vue")
  },
  {
    path: "/user/:userId",
    name: "user",
    meta: {
      title: "User"
    },
    component: () => import("@/views/User.vue")
  },
  {
    path: "/profile",
    name: "profile",
    meta: {
      title: "Profile"
    },
    component: () => import("@/views/Profile.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});

export default router;
