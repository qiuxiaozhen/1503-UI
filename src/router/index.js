import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home';
import QxzTest from '@/pages/qxzTest';
import LmTest from '@/pages/lmTest';
import LsqTest from '@/pages/lsqTest';
import HzzTest from '@/pages/hzzTest';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/qxzTest',
      name: 'qxzTest',
      component: QxzTest
    }, {
      path: '/lmTest',
      name: 'lmTest',
      component: LmTest
    }, {
      path: '/lsqTest',
      name: 'lsqTest',
      component: LsqTest
    }, {
      path: '/hzzTest',
      name: 'hzzTest',
      component: HzzTest
    }
  ]
});
