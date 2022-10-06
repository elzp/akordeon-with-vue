import { createApp } from 'vue';
import Article from './Article.js';
const app = createApp({
  components: { Article },
  data() {
    return {
      isVisible: [true, true, true, true],
    };
  },
  methods: {
    changeVisibility(id) {
      this.isVisible[id] = !this.isVisible[id];
    },
  },
  template: `<main class="w-3/5 p-8 mx-auto">
            <section class="shadow" v-for="id in [1,2,3,4]">
                <Article :index="id" @change="changeVisibility" :visible="isVisible[id]"
                />
            </section>
        </main>`,
});

app.mount('#app');
