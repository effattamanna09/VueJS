Vue.component("task-list", {
    template: `
      <div>
          <task v-for="task in tasks" v-text="task.description"></task>
      </div>
      `,
    data() {
      return {
        tasks: [
          { description: "Hello Toma", completed: true },
          { description: "hey Toma", completed: true },
          { description: "whats Toma", completed: true },
          { description: "name  Toma", completed: true },
          { description: "world  Toma", completed: true },
          { description: "lorem  Toma", completed: true },
        ],
      };
    },
  });
  Vue.component("task", {
    template: "<li><slot></slot></li>",
  });
  new Vue({
    el: "#root",
  });