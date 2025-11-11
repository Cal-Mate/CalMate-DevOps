export default [
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/layout/DefaultLayout.vue'),
    
    children: [
      {
        path: 'dashboard',
        name: 'main-dashboard', 
        component: () => import('@/views/defaultPage/DashBoard.vue'), // lazy
      },
      {
        path: 'profile',
        name: 'main-profile', 
        component: () => import('@/views/defaultPage/ProfileSettings.vue'), // lazy
      },
    ],
  },
];
