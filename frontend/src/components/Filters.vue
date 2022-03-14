<template>
  <div>
    <div id="maindiv">
      <input
        v-model="quickSearch"
        :style="{ marginTop: '18px' }"
        placeholder="Quick search"
      />
      <RadioFilter
        @active-changed="typeChanged"
        :text="'Type'"
        :items="typeFilters"
        :activeIndex="typeFilterActiveIndex"
      />
      <RadioFilter
        @active-changed="priorityChanged"
        :text="'Priority'"
        :items="priorityFilters"
        :activeIndex="priorityFilterActiveIndex"
      />
      <div class="reporterDiv">
        <div>
          <span>Assignees</span>
        </div>
        <v-select
          class="select"
          v-model="assignees"
          multiple
          :options="[
            { label: 'Philip Fry', code: '001' },
            { label: 'Hermes Conrad', code: '002' }
          ]"
        ></v-select>
      </div>

      <div class="reporterDiv">
        <div>
          <span>Reporter</span>
        </div>
        <v-select
          id="select"
          v-model="reporter"
          :options="[
            { label: 'Philip Fry', code: '001' },
            { label: 'Hermes Conrad', code: '002' }
          ]"
        ></v-select>
      </div>
      <div>
        <div>
          <span>Section</span>
        </div>
        <input v-model="section" />
      </div>
      <div>
        <div>
          <span>Due Date</span>
        </div>
        <date-picker v-model:value="date"></date-picker>
      </div>
    </div>
    <span @click="$emit('clear-filter')" id="clearFilters"
      >Clear applied filters</span
    >
  </div>
</template>

<script>
import "vue-select/dist/vue-select.css";
import DatePicker from "vue-datepicker-next";
import RadioFilter from "./RadioFilter";
import "vue-datepicker-next/index.css";

export default {
  name: "Filters",
  components: { DatePicker, RadioFilter },
  props: {
    date: Date,
    quickSearch: String,
    section: String,
    assignees: Array,
    reporter: Object,
    type: String,
    priority: String,
    typeFilterActiveIndex: Number,
    priorityFilterActiveIndex: Number
  },

  methods: {
    typeChanged(type, activeIndex) {
      //console.log(type, activeIndex);
      this.$emit(
        "type-changed",
        type,
        activeIndex /*{
        quickSearch: this.quickSearch,
        date: this.date,
        section: this.section,
        assignees: this.assignees,
        reporter: this.reporter,
        type: this.type,
        priority: this.priority
      }*/
      );
    },
    priorityChanged(priority, activeIndex) {
      this.$emit(
        "priority-changed",
        priority, activeIndex 
      );
    }
  },
  computed: {
    typeFilters() {
      return ["Task", "Note"];
    },
    priorityFilters() {
      return ["Low", "Medium", "High"];
    }
  },
  watch: {
    quickSearch(newVal, oldVal) {
      this.$emit(
        "quicksearch-changed",
        newVal /*{
        quickSearch: this.quickSearch,
        date: this.date,
        section: this.section,
        assignees: this.assignees,
        reporter: this.reporter,
        type: this.type,
        priority: this.priority
      }*/
      );
    },
    date(newVal, oldVal) {
      this.$emit(
        "date-changed",
        newVal /*{
        quickSearch: this.quickSearch,
        date: this.date,
        section: this.section,
        assignees: this.assignees,
        reporter: this.reporter,
        type: this.type,
        priority: this.priority
      }*/
      );
    },
    section(newVal, oldVal) {
      this.$emit(
        "section-changed",
        newVal /*{
        quickSearch: this.quickSearch,
        date: this.date,
        section: this.section,
        assignees: this.assignees,
        reporter: this.reporter,
        type: this.type,
        priority: this.priority,
      }*/
      );
    },
    reporter(newVal, oldVal) {
      this.$emit(
        "reporter-changed",
        newVal /*{
        quickSearch: this.quickSearch,
        date: this.date,
        section: this.section,
        assignees: this.assignees,
        reporter: this.reporter,
        type: this.type,
        priority: this.priority
      }*/
      );
    },
    assignees: {
      deep: true,
      handler(newVal) {
        this.$emit(
          "assignees-changed",
          newVal /*{
          quickSearch: this.quickSearch,
          date: this.date,
          section: this.section,
          assignees: this.assignees,
          reporter: this.reporter,
          type: this.type,
          priority: this.priority
        }*/
        );
      }
    },
    type(newVal, oldVal) {
      this.$emit(
        "type-changed",
        newVal /*{
        quickSearch: this.quickSearch,
        date: this.date,
        section: this.section,
        assignees: this.assignees,
        reporter: this.reporter,
        type: this.type,
        priority: this.priority
      }*/
      );
    },
    priority(newVal, oldVal) {
      this.$emit(
        "priority-changed",
        newVal /*{
        quickSearch: this.quickSearch,
        date: this.date,
        section: this.section,
        assignees: this.assignees,
        reporter: this.reporter,
        type: this.type,
        priority: this.priority
      }*/
      );
    }
  }
};
</script>

<style scoped>
input {
  height: 27px;
}

.reporterDiv {
  flex: 0 1 13%;
}
#maindiv {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#clearFilters {
  cursor: pointer;
  color: red;
  text-decoration: underline;
}

.select {
  flex: 0 1 20%;
  --vs-selected-bg: blue;
  --vs-selected-color: #eeeeee;
}
</style>
