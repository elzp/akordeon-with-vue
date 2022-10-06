import { createApp } from 'vue';
import Article from './Article.js';
const app = createApp({
  components: { Article },
  template: `<main class="w-3/5 p-8 mx-auto">
            <section class="shadow" v-for="id in [1,2,3,4]">
                <Article/>
            </section>
        </main>`,
});

app.mount('#app');
