<template>
  <div>
    <BreadCrumb :URL1="currentRouteName" />
    <div id="titleAndButton">
      <h1>Review notes</h1>
      <OverlayButton
        :buttonText="'New'"
        :overLayText="'Here will be the form to create a new review note..'"
      />
    </div>
    <div id="filters">
      <Filters
        :section="section"
        :assignees="assignees"
        :reporter="reporter"
        :type="type"
        :priority="priority"
        :quickSearch="quickSearch"
        :date="date"
        :typeFilterActiveIndex="typeFilterActiveIndex"
        :priorityFilterActiveIndex="priorityFilterActiveIndex"
        @clear-filter="reset"
        @quicksearch-changed="quickSearchFilterChanged"
        @date-changed="dateFilterChanged"
        @reporter-changed="reporterFilterChanged"
        @assignees-changed="assigneesFilterChanged"
        @type-changed="typeFilterChanged"
        @priority-changed="priorityFilterChanged"
        @section-changed="sectionFilterChanged"
      />
    </div>

    <ReviewNotes  :reviewNotes="filteredReviewNotes" />
    <LoadMore @load-more="loadMore" v-if="hasMore" />
  </div>
</template>

<script>
// @ is an alias to /src

import ReviewNotes from "../components/ReviewNotes.vue";
import LoadMore from "../components/LoadMore.vue";
import OverlayButton from "../components/OverlayButton.vue";
import BreadCrumb from "../components/BreadCrumb.vue";
import Filters from "../components/Filters.vue";

import moment from "moment";

export default {
  name: "ReviewNotesView",
  components: {
    ReviewNotes,
    LoadMore,
    OverlayButton,
    BreadCrumb,
    Filters
  },
  computed: {
    currentRouteName() {
      return this.$router.currentRoute._value.fullPath;
    }
  },

  data() {
    return {
      reviewNotes: [],
      filteredReviewNotes: [],
      date: null,
      quickSearch: "",
      section: "",
      assignees: [],
      reporter: null,
      type: "",
      priority: "",
      typeFilterActiveIndex : -1,
      priorityFilterActiveIndex : -1,
      hasMore: false,
      limit: 3,
      offset: 0,
    };
  },

  methods: {
    async loadMore(){
      this.offset = this.offset + this.limit
      await this.fetchReviewNotes()
    },
    async fetchReviewNotes() {
      const res = await fetch('http://localhost:3000/api/v1/reviewNotes/'+this.offset+'/'+this.limit)
      const data = await res.json()

      var copy = JSON.parse(JSON.stringify(this.reviewNotes));
      copy.push(...data.reviewNotes);
      this.reviewNotes = copy

      this.hasMore= data.hasMore
      this.filterArray();
    },
    reset() {
      console.log("clearing..");
      (this.filteredReviewNotes = this.reviewNotes), (this.date = null);
      (this.quickSearch = ""),
        (this.section = ""),
        (this.assignees = []),
        (this.reporter = null),
        (this.type = ""),
        (this.priority = ""),
        (this.typeFilterActiveIndex=-1);
    },
    testAssignees(assignees, assigneesFilterArray) {
      var set = new Set();
      assignees.map(id => set.add(id.$oid));

      for (let index = 0; index < assigneesFilterArray.length; index++) {
        if (!set.has(assigneesFilterArray[index].code)) {
          return false;
        }
      }

      return true;
    },
    testReporter(reporter, reporterFilter) {
      if (reporterFilter === null) {
        return true;
      }
      return reporter === reporterFilter.code;
    },
    testRadioFilter(value, filter) {
      if (filter.toLowerCase() === "all") return true;

      return value.toLowerCase().includes(filter.toLowerCase());
    },
    testDate(dueDate, dueDateFilter) {
      if (dueDateFilter === null) {
        return true;
      } else {
        var date = moment(dueDate);
        return date.isSame(dueDateFilter);
      }
    },
    testSectionRef(sectionRef, sectionRefFilter) {
      if (
        (sectionRef === null || sectionRef === "") &&
        sectionRefFilter === ""
      ) {
        return true;
      }

      if (sectionRef === null || sectionRef === "") {
        return false;
      } else {
        return sectionRef
          .toLowerCase()
          .includes(sectionRefFilter.toLowerCase());
      }
    },
    filterArray() {
      
      this.filteredReviewNotes = this.reviewNotes.filter(reviewNote => {
        return (
          reviewNote.title
            .toLowerCase()
            .includes(this.quickSearch.toLowerCase()) &&
          this.testSectionRef(reviewNote.sectionRef, this.section) &&
          this.testDate(reviewNote.dueDate, this.date) &&
          this.testRadioFilter(reviewNote.priority.text, this.priority) &&
          this.testRadioFilter(reviewNote.type, this.type) &&
          this.testReporter(reviewNote.reporterId.$oid, this.reporter) &&
          this.testAssignees(reviewNote.assignees, this.assignees) //&&
          //
          //date
        );
      });
    },
    quickSearchFilterChanged(quickSearchNewVal) {
      this.quickSearch = quickSearchNewVal;
      this.filterArray();
    },
    dateFilterChanged(dateNewVal) {
      this.date = dateNewVal;
      this.filterArray();
    },
    sectionFilterChanged(newVal) {
      this.section = newVal;
      this.filterArray();
    },
    reporterFilterChanged(reporterNewVal){
      this.reporter = reporterNewVal
      this.filterArray()
    },
    assigneesFilterChanged(newVal) {
      this.assignees = newVal;
      this.filterArray();
    },
    typeFilterChanged(newVal, activeIndex) {
      this.type = newVal;
      this.typeFilterActiveIndex = activeIndex
      this.filterArray();
    },
    priorityFilterChanged(newVal, activeIndex) {
      this.priority = newVal;
      this.priorityFilterActiveIndex = activeIndex
      this.filterArray();
    },
  },

  async created() {
     await this.fetchReviewNotes()
    //this.filterArray()
  },
    /*(this.reviewNotes = [
      {
        assignees: [
          {
            $oid: "001"
          }
        ],
        isClosed: false,
        dueDate: "2021-09-15",
        comments: [],
        _id: {
          $oid: "61403b09fb64553cb47a4235"
        },
        title: "Request budget documents",
        description: "test2",
        sectionRef: "app-engagement-information",
        type: "Reviewnote",
        status: "In Progress",
        priority: {
          text: "Medium",
          sortKey: 1
        },
        reporterId: {
          $oid: "001"
        },
        createdAt: {
          $date: "2021-09-14T06:02:49.781Z"
        },
        updatedAt: {
          $date: "2021-09-14T06:02:49.781Z"
        }
      },
      {
        assignees: [
          {
            $oid: "001"
          },
          {
            $oid: "002"
          }
        ],
        isClosed: false,
        dueDate: "",
        comments: [],
        _id: {
          $oid: "61403b72fb64553cb47a4248"
        },
        title: "Request sell documents",
        description: "Description here",
        sectionRef: null,
        type: "Task",
        status: "Addressed",
        priority: {
          text: "High",
          sortKey: 2
        },
        reporterId: {
          $oid: "001"
        },
        createdAt: {
          $date: "2021-09-14T06:04:34.688Z"
        },
        updatedAt: {
          $date: "2021-09-14T06:04:34.688Z"
        }
      },
      {
        assignees: [
          {
            $oid: "002"
          }
        ],
        isClosed: false,
        dueDate: "2021-09-15",
        comments: [],
        _id: {
          $oid: "61405560fb64553cb47a4333"
        },
        title: "Review X due to condition Y",
        description: "Description",
        sectionRef: null,
        type: "Reviewnote",
        status: "Addressed",
        priority: {
          text: "Medium",
          sortKey: 1
        },
        reporterId: {
          $oid: "001"
        },
        createdAt: {
          $date: "2021-09-14T07:55:12.923Z"
        },
        updatedAt: {
          $date: "2021-09-14T07:55:12.923Z"
        }
      },
      {
        assignees: [],
        isClosed: false,
        dueDate: "2021-09-16",
        comments: [],
        _id: {
          $oid: "61405575fb64553cb47a4339"
        },
        title: "We need additional client information",
        description: "Description",
        sectionRef: null,
        type: "Task",
        status: "Not started",
        priority: {
          text: "High",
          sortKey: 2
        },
        reporterId: {
          $oid: "001"
        },
        createdAt: {
          $date: "2021-09-14T07:55:33.085Z"
        },
        updatedAt: {
          $date: "2021-09-14T07:55:33.085Z"
        }
      },
      {
        assignees: [],
        isClosed: false,
        dueDate: "2021-09-30",
        comments: [],
        _id: {
          $oid: "61405592fb64553cb47a433f"
        },
        title: "Test2",
        description: "Test2 description...",
        sectionRef: "app-independence",
        type: "Reviewnote",
        status: "In Progress",
        priority: {
          text: "High",
          sortKey: 2
        },
        reporterId: {
          $oid: "001"
        },
        createdAt: {
          $date: "2021-09-14T07:56:02.529Z"
        },
        updatedAt: {
          $date: "2021-09-14T07:56:02.529Z"
        }
      },
      {
        assignees: [],
        isClosed: true,
        dueDate: "",
        comments: [],
        _id: {
          $oid: "614055a1fb64553cb47a4349"
        },
        title: "Test5",
        description: "test 5 description...",
        sectionRef: null,
        type: "Reviewnote",
        status: "Closed",
        priority: {
          text: "Medium",
          sortKey: 1
        },
        reporterId: {
          $oid: "002"
        },
        createdAt: {
          $date: "2021-09-14T07:56:17.728Z"
        },
        updatedAt: {
          $date: "2021-09-14T07:56:17.728Z"
        }
      },
      {
        assignees: [],
        isClosed: false,
        dueDate: "2021-09-18",
        comments: [],
        _id: {
          $oid: "614055aefb64553cb47a434f"
        },
        title: "Test6",
        description: "test6",
        sectionRef: null,
        type: "Reviewnote",
        status: "Pending documentation",
        priority: {
          text: "High",
          sortKey: 2
        },
        reporterId: {
          $oid: "001"
        },
        createdAt: {
          $date: "2021-09-14T07:56:30.919Z"
        },
        updatedAt: {
          $date: "2021-09-14T07:56:30.919Z"
        }
      },
      {
        assignees: [],
        isClosed: false,
        dueDate: "2021-09-02",
        comments: [],
        _id: {
          $oid: "614055cdfb64553cb47a4355"
        },
        title: "Test7",
        description: "Test 7 description",
        sectionRef: "app-scope",
        type: "Reviewnote",
        status: "Pending documentation",
        priority: {
          text: "Medium",
          sortKey: 1
        },
        reporterId: {
          $oid: "001"
        },
        createdAt: {
          $date: "2021-09-14T07:57:01.293Z"
        },
        updatedAt: {
          $date: "2021-09-14T07:57:01.293Z"
        }
      },
      {
        assignees: [],
        isClosed: false,
        dueDate: "2021-09-05",
        comments: [],
        _id: {
          $oid: "614055eafb64553cb47a435f"
        },
        title: "Test8",
        description: "",
        sectionRef: "app-engagement-information",
        type: "Reviewnote",
        status: "Not started",
        priority: {
          text: "Medium",
          sortKey: 1
        },
        reporterId: {
          $oid: "002"
        },
        createdAt: {
          $date: "2021-09-14T07:57:30.345Z"
        },
        updatedAt: {
          $date: "2021-09-14T07:57:30.345Z"
        }
      },
      {
        assignees: [],
        isClosed: false,
        dueDate: "2021-09-24",
        comments: [],
        _id: {
          $oid: "6140560ffb64553cb47a4369"
        },
        title: "Perform task X",
        description: "",
        sectionRef: "app-engagement-information",
        type: "Task",
        status: "Addressed",
        priority: {
          text: "Medium",
          sortKey: 1
        },
        reporterId: {
          $oid: "001"
        },
        createdAt: {
          $date: "2021-09-14T07:58:07.162Z"
        },
        updatedAt: {
          $date: "2021-09-14T07:58:07.162Z"
        }
      },
      {
        assignees: [],
        isClosed: false,
        dueDate: "2021-09-17",
        comments: [],
        _id: {
          $oid: "61405635fb64553cb47a4373"
        },
        title: "Test9",
        description: "Test 9 description...",
        sectionRef: "app-independence",
        type: "Reviewnote",
        status: "In Progress",
        priority: {
          text: "High",
          sortKey: 2
        },
        reporterId: {
          $oid: "001"
        },
        createdAt: {
          $date: "2021-09-14T07:58:45.893Z"
        },
        updatedAt: {
          $date: "2021-09-14T07:58:45.893Z"
        }
      },
      {
        assignees: [],
        isClosed: false,
        dueDate: "2021-09-14",
        comments: [],
        _id: {
          $oid: "6140567bfb64553cb47a4388"
        },
        title: "Test10",
        description: "Test 10 description....",
        sectionRef: "app-engagement-information",
        type: "Reviewnote",
        status: "In Progress",
        priority: {
          text: "High",
          sortKey: 2
        },
        reporterId: {
          $oid: "001"
        },
        createdAt: {
          $date: "2021-09-14T07:59:55.883Z"
        },
        updatedAt: {
          $date: "2021-09-14T07:59:55.883Z"
        }
      }
    ]),
      (this.filteredReviewNotes = [
        {
          assignees: [
            {
              $oid: "001"
            }
          ],
          isClosed: false,
          dueDate: "2021-09-15",
          comments: [],
          _id: {
            $oid: "61403b09fb64553cb47a4235"
          },
          title: "Request budget documents",
          description: "test2",
          sectionRef: "app-engagement-information",
          type: "Reviewnote",
          status: "In Progress",
          priority: {
            text: "Medium",
            sortKey: 1
          },
          reporterId: {
            $oid: "001"
          },
          createdAt: {
            $date: "2021-09-14T06:02:49.781Z"
          },
          updatedAt: {
            $date: "2021-09-14T06:02:49.781Z"
          }
        },
        {
          assignees: [
            {
              $oid: "001"
            },
            {
              $oid: "002"
            }
          ],
          isClosed: false,
          dueDate: "",
          comments: [],
          _id: {
            $oid: "61403b72fb64553cb47a4248"
          },
          title: "Request sell documents",
          description: "Description here",
          sectionRef: null,
          type: "Task",
          status: "Addressed",
          priority: {
            text: "High",
            sortKey: 2
          },
          reporterId: {
            $oid: "001"
          },
          createdAt: {
            $date: "2021-09-14T06:04:34.688Z"
          },
          updatedAt: {
            $date: "2021-09-14T06:04:34.688Z"
          }
        },
        {
          assignees: [
            {
              $oid: "002"
            }
          ],
          isClosed: false,
          dueDate: "2021-09-15",
          comments: [],
          _id: {
            $oid: "61405560fb64553cb47a4333"
          },
          title: "Review X due to condition Y",
          description: "Description",
          sectionRef: null,
          type: "Reviewnote",
          status: "Addressed",
          priority: {
            text: "Medium",
            sortKey: 1
          },
          reporterId: {
            $oid: "001"
          },
          createdAt: {
            $date: "2021-09-14T07:55:12.923Z"
          },
          updatedAt: {
            $date: "2021-09-14T07:55:12.923Z"
          }
        },
        {
          assignees: [],
          isClosed: false,
          dueDate: "2021-09-16",
          comments: [],
          _id: {
            $oid: "61405575fb64553cb47a4339"
          },
          title: "We need additional client information",
          description: "Description",
          sectionRef: null,
          type: "Task",
          status: "Not started",
          priority: {
            text: "High",
            sortKey: 2
          },
          reporterId: {
            $oid: "001"
          },
          createdAt: {
            $date: "2021-09-14T07:55:33.085Z"
          },
          updatedAt: {
            $date: "2021-09-14T07:55:33.085Z"
          }
        },
        {
          assignees: [],
          isClosed: false,
          dueDate: "2021-09-30",
          comments: [],
          _id: {
            $oid: "61405592fb64553cb47a433f"
          },
          title: "Test2",
          description: "Test2 description...",
          sectionRef: "app-independence",
          type: "Reviewnote",
          status: "In Progress",
          priority: {
            text: "High",
            sortKey: 2
          },
          reporterId: {
            $oid: "001"
          },
          createdAt: {
            $date: "2021-09-14T07:56:02.529Z"
          },
          updatedAt: {
            $date: "2021-09-14T07:56:02.529Z"
          }
        },
        {
          assignees: [],
          isClosed: true,
          dueDate: "",
          comments: [],
          _id: {
            $oid: "614055a1fb64553cb47a4349"
          },
          title: "Test5",
          description: "test 5 description...",
          sectionRef: null,
          type: "Reviewnote",
          status: "Closed",
          priority: {
            text: "Medium",
            sortKey: 1
          },
          reporterId: {
            $oid: "002"
          },
          createdAt: {
            $date: "2021-09-14T07:56:17.728Z"
          },
          updatedAt: {
            $date: "2021-09-14T07:56:17.728Z"
          }
        },
        {
          assignees: [],
          isClosed: false,
          dueDate: "2021-09-18",
          comments: [],
          _id: {
            $oid: "614055aefb64553cb47a434f"
          },
          title: "Test6",
          description: "test6",
          sectionRef: null,
          type: "Reviewnote",
          status: "Pending documentation",
          priority: {
            text: "High",
            sortKey: 2
          },
          reporterId: {
            $oid: "001"
          },
          createdAt: {
            $date: "2021-09-14T07:56:30.919Z"
          },
          updatedAt: {
            $date: "2021-09-14T07:56:30.919Z"
          }
        },
        {
          assignees: [],
          isClosed: false,
          dueDate: "2021-09-02",
          comments: [],
          _id: {
            $oid: "614055cdfb64553cb47a4355"
          },
          title: "Test7",
          description: "Test 7 description",
          sectionRef: "app-scope",
          type: "Reviewnote",
          status: "Pending documentation",
          priority: {
            text: "Medium",
            sortKey: 1
          },
          reporterId: {
            $oid: "001"
          },
          createdAt: {
            $date: "2021-09-14T07:57:01.293Z"
          },
          updatedAt: {
            $date: "2021-09-14T07:57:01.293Z"
          }
        },
        {
          assignees: [],
          isClosed: false,
          dueDate: "2021-09-05",
          comments: [],
          _id: {
            $oid: "614055eafb64553cb47a435f"
          },
          title: "Test8",
          description: "",
          sectionRef: "app-engagement-information",
          type: "Reviewnote",
          status: "Not started",
          priority: {
            text: "Medium",
            sortKey: 1
          },
          reporterId: {
            $oid: "002"
          },
          createdAt: {
            $date: "2021-09-14T07:57:30.345Z"
          },
          updatedAt: {
            $date: "2021-09-14T07:57:30.345Z"
          }
        },
        {
          assignees: [],
          isClosed: false,
          dueDate: "2021-09-24",
          comments: [],
          _id: {
            $oid: "6140560ffb64553cb47a4369"
          },
          title: "Perform task X",
          description: "",
          sectionRef: "app-engagement-information",
          type: "Task",
          status: "Addressed",
          priority: {
            text: "Medium",
            sortKey: 1
          },
          reporterId: {
            $oid: "001"
          },
          createdAt: {
            $date: "2021-09-14T07:58:07.162Z"
          },
          updatedAt: {
            $date: "2021-09-14T07:58:07.162Z"
          }
        },
        {
          assignees: [],
          isClosed: false,
          dueDate: "2021-09-17",
          comments: [],
          _id: {
            $oid: "61405635fb64553cb47a4373"
          },
          title: "Test9",
          description: "Test 9 description...",
          sectionRef: "app-independence",
          type: "Reviewnote",
          status: "In Progress",
          priority: {
            text: "High",
            sortKey: 2
          },
          reporterId: {
            $oid: "001"
          },
          createdAt: {
            $date: "2021-09-14T07:58:45.893Z"
          },
          updatedAt: {
            $date: "2021-09-14T07:58:45.893Z"
          }
        },
        {
          assignees: [],
          isClosed: false,
          dueDate: "2021-09-14",
          comments: [],
          _id: {
            $oid: "6140567bfb64553cb47a4388"
          },
          title: "Test10",
          description: "Test 10 description....",
          sectionRef: "app-engagement-information",
          type: "Reviewnote",
          status: "In Progress",
          priority: {
            text: "High",
            sortKey: 2
          },
          reporterId: {
            $oid: "001"
          },
          createdAt: {
            $date: "2021-09-14T07:59:55.883Z"
          },
          updatedAt: {
            $date: "2021-09-14T07:59:55.883Z"
          }
        }
      ]);*/
  
};
</script>

<style scoped>
#titleAndButton {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(229, 229, 229);
  margin-top: 20px;
  height: 40px;
}

#filters {
  margin-top: 30px;
  margin-bottom: 55px;
}

#titleAndButton > div {
  margin: 10px;
}
</style>
