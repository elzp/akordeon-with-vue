export default {
  name: 'Article',
  data() {
    return {};
  },
  props: ['index', 'visible'],
  method: {},
  template: `
  <article class="border-b">
  <div class="border-l-2 border-transparent">
      <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
          <span class="text-grey-darkest font-thin text-xl">
           {{index}}
          </span>
          <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center"
          @click="()=>$emit('change',this.index)">
              <!-- icon by feathericons.com -->
              <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="6 9 12 15 18 9">
                  </polyline>
              </svg>
          </div>
      </header>
      <div v-if="visible">
      Massa vitae tortor condimentum lacinia quis vel eros donec
      </div>
  </div>
</article>`,
};
