
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/profiles', component: () => import('pages/ProfileList.vue') },
      { path: '/register-profile', component: () => import('pages/ProfileForm.vue') },
      { path: '/profile', component: () => import('pages/Profile.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
