import IndexTextCounted from './components/TextCounted/IndexField';
import DetailTextCounted from './components/TextCounted/DetailField';
import FormTextCounted from './components/TextCounted/FormField';

import IndexTextareaCounted from './components/TextareaCounted/IndexField';
import DetailTextareaCounted from './components/TextareaCounted/DetailField';
import FormTextareaCounted from './components/TextareaCounted/FormField';

Nova.booting(Vue => {
  Vue.component('index-text-counted', IndexTextCounted);
  Vue.component('detail-text-counted', DetailTextCounted);
  Vue.component('form-text-counted', FormTextCounted);

  Vue.component('index-textarea-counted', IndexTextareaCounted);
  Vue.component('detail-textarea-counted', DetailTextareaCounted);
  Vue.component('form-textarea-counted', FormTextareaCounted);
});
