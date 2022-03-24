"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const getAll = (limit, offset) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(reviewNotes.length);
    //result = reviewNotes.slice(offset, (limit+offset));
    var hasMore = true;
    /*if((result.length + offset)>=reviewNotes.length-1){
      var hasMore = false
    }*/
    return yield { /*reviewNotes:result,*/ hasMore: hasMore };
});
exports.getAll = getAll;
const reviewNotes = [
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
];
