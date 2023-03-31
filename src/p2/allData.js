const dataForImage1 = [
  {
    label: "File",
    icon: "fa fa-file-o",
    items: [
      {
        label: "New",
        icon: "fa-solid fa-plus",
        items: [
          {
            label: "Bookmark",
            icon: "fa fa-bookmark-o",
          },
          {
            label: "Video",
            icon: "fa-regular fa-file-video",
          },
        ],
      },
      {
        label: "Delete",
        icon: "fa fa-trash-o",
        command: (event) => {
          console.log("Delete Clicked", event);
        },
      },
      {
        separator: true,
      },
      {
        label: "Export",
        icon: "fa-solid fa-external-link",
        command: (event) => {
          console.log("Export Clicked", event);
        },
      },
    ],
  },
  {
    label: "Edit",
    icon: "fa fa-pencil-square-o",
    items: [
      {
        label: "Left",
        icon: "fa fa-align-left",
      },
      {
        label: "Right",
        icon: "fa-solid fa-align-right",
      },
      {
        label: "Center",
        icon: "fa-solid fa-align-center",
      },
      {
        label: "Justify",
        icon: "fa-solid fa-align-justify",
      },
    ],
  },
  {
    label: "Users",
    icon: "fa fa-user-o",
    items: [
      {
        label: "New",
        icon: "fa-solid fa-user-plus",
      },
      {
        label: "Delete",
        icon: "fa-solid fa-user-minus",
      },
      {
        label: "Search",
        icon: "fa-solid fa-users",
        items: [
          {
            label: "Filter",
            icon: "fa fa-filter",
            items: [
              {
                label: "Print",
                icon: "fa-solid fa-print",
              },
            ],
          },
          {
            icon: "fa-solid fa-bars",
            label: "List",
          },
        ],
      },
    ],
  },
  {
    label: "Events",
    icon: "fa fa-calendar-o",
    items: [
      {
        label: "Edit",
        icon: "fa fa-pencil-square-o",
        items: [
          {
            label: "Save",
            icon: "fa-solid fa-calendar-plus",
          },
          {
            label: "Delete",
            icon: "fa-solid fa-calendar-minus",
          },
        ],
      },
      {
        label: "Archieve",
        icon: "fa fa-calendar-times-o",
        items: [
          {
            label: "Remove",
            icon: "fa-solid fa-calendar-minus",
          },
        ],
      },
    ],
  },
  {
    separator: true,
  },
  {
    label: "Quit",
    icon: "fa-solid fa-power-off",
    command: (event) => {
      console.log("Quit Clicked", event);
    },
  },
];

const dataForImage2 = [
  {
    label: "File",
    icon: "fa fa-file-o",
    items: [
      {
        label: "New",
        icon: "fa-solid fa-plus",
        items: [
          {
            label: "Bookmark",
            icon: "fa fa-bookmark-o",
          },
          {
            label: "Video",
            icon: "fa-regular fa-file-video",
          },
        ],
      },
      {
        label: "Delete",
        icon: "fa fa-trash-o",
        command: (event) => {
          console.log("Delete Clicked", event);
        },
      },
      {
        separator: true,
      },
      {
        label: "Export",
        icon: "fa-solid fa-external-link",
        command: (event) => {
          console.log("Export Clicked", event);
        },
      },
    ],
  },
  {
    label: "Edit",
    icon: "fa fa-pencil-square-o",
    items: [
      {
        label: "Left",
        icon: "fa fa-align-left",
      },
      {
        label: "Right",
        icon: "fa-solid fa-align-right",
      },
      {
        label: "Center",
        icon: "fa-solid fa-align-center",
      },
      {
        label: "Justify",
        icon: "fa-solid fa-align-justify",
      },
    ],
  },
  {
    label: "Events",
    icon: "fa fa-calendar-o",
    items: [
      {
        label: "Edit",
        icon: "fa fa-pencil-square-o",
        items: [
          {
            label: "Save",
            icon: "fa-solid fa-calendar-plus",
          },
          {
            label: "Delete",
            icon: "fa-solid fa-calendar-minus",
          },
        ],
      },
      {
        label: "Archieve",
        icon: "fa fa-calendar-times-o",
        items: [
          {
            label: "Remove",
            icon: "fa-solid fa-calendar-minus",
          },
        ],
      },
    ],
  },
  {
    separator: true,
  },
  {
    label: "Quit",
    icon: "fa-solid fa-power-off",
    command: (event) => {
      console.log("Quit Clicked", event);
    },
  },
];

const dataForImage3 = [
  {
    label: "Users",
    icon: "fa fa-user-o",
    items: [
      {
        label: "New",
        icon: "fa-solid fa-user-plus",
      },
      {
        label: "Delete",
        icon: "fa-solid fa-user-minus",
      },
      {
        label: "Search",
        icon: "fa-solid fa-users",
        items: [
          {
            label: "Filter",
            icon: "fa fa-filter",
            items: [
              {
                label: "Print",
                icon: "fa-solid fa-print",
              },
            ],
          },
          {
            icon: "fa-solid fa-bars",
            label: "List",
          },
        ],
      },
    ],
  },
  {
    label: "Events",
    icon: "fa fa-calendar-o",
    items: [
      {
        label: "Edit",
        icon: "fa fa-pencil-square-o",
        items: [
          {
            label: "Save",
            icon: "fa-solid fa-calendar-plus",
          },
          {
            label: "Delete",
            icon: "fa-solid fa-calendar-minus",
          },
        ],
      },
      {
        label: "Archieve",
        icon: "fa fa-calendar-times-o",
        items: [
          {
            label: "Remove",
            icon: "fa-solid fa-calendar-minus",
          },
        ],
      },
    ],
  },
  {
    separator: true,
  },
  {
    label: "Quit",
    icon: "fa-solid fa-power-off",
    command: (event) => {
      console.log("Quit Clicked", event);
    },
  },
];
