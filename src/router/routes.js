
const routes = [
  {
    path: '/',
    name: 'MyLayout',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/Home.vue') },
      { path: '/profiles', name: 'ProfileList', component: () => import('pages/ProfileList.vue') },
      { path: '/register-profile', name: 'ProfileForm', component: () => import('pages/ProfileForm.vue') },
      { path: '/profile/:id', name: 'Profile', component: () => import('pages/Profile.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    name: 'Error404',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
