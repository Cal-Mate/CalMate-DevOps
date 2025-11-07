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
        path: 'exerciseRecords',
        name: 'main-exerciseRecords', 
        component: () => import('@/views/defaultPage/ExerciseRecords.vue'), 
      }
    ],
  },
];
