export default function reportJson(id) {
  // console.log("json ", json);
  const head = ["Sr.No", "Title", "Note", "Folder", "File", "Owner", "Signers"];
  const contactbook = ["Sr.No", "Title", "Email", "Phone"];
  const dashboardReportHead = ["Title", "File", "Owner", "Signers"];

  switch (id) {
    // draft documents report
    case "ByHuevtCFY":
      return {
        reportName: "Draft Documents",
        heading: head,
        actions: [
          {
            btnId: "1231",
            hoverLabel: "Edit",
            btnColor: "#4bd396",
            textColor: "white",
            btnIcon: "fa-solid fa-pen",
            redirectUrl: "draftDocument",
            action: "redirect"
          },
          {
            btnId: "2142",
            hoverLabel: "Delete",
            btnColor: "#ff4848",
            textColor: "white",
            btnIcon: "fa fa-trash",
            redirectUrl: "",
            action: "delete"
          }
        ],
        helpMsg:
          "These are documents you have started but have not finalized for sending."
      };
    // Need your sign report
    case "4Hhwbp482K":
      return {
        reportName: "Need your sign",
        heading: head,
        actions: [
          {
            btnId: "4536",
            btnLabel: "sign",
            hoverLabel: "Sign",
            btnColor: "#3ac9d6",
            textColor: "white",
            btnIcon: "fa-solid fa-signature",
            redirectUrl: "pdfRequestFiles",
            action: "redirect"
          }
        ],
        helpMsg:
          "This is a list of documents that are waiting for your signature"
      };
    // In progess report
    case "1MwEuxLEkF":
      return {
        reportName: "In-progress documents",
        heading: head,
        actions: [
          {
            btnId: "8901",
            hoverLabel: "Share",
            btnColor: "#4bd396",
            textColor: "white",
            btnIcon: "fa-solid fa-share",
            redirectUrl: "",
            action: "share"
          },
          {
            btnId: "1588",
            hoverLabel: "View",
            btnColor: "#3ac9d6",
            textColor: "white",
            btnIcon: "fa fa-eye",
            redirectUrl: "pdfRequestFiles",
            action: "redirect"
          },
          {
            btnId: "2234",
            hoverLabel: "option",
            btnColor: "transparent",
            textColor: "black",
            btnIcon: "fa-solid fa-ellipsis-vertical fa-lg",
            action: "option",
            subaction: [
              {
                btnId: "1688",
                btnLabel: "Revoke",
                hoverLabel: "Revoke",
                btnIcon: "fa-solid fa-file-circle-xmark",
                redirectUrl: "",
                action: "revoke"
              },
              {
                btnId: "1488",
                btnLabel: "Delete",
                hoverLabel: "Delete",
                btnIcon: "fa fa-trash",
                redirectUrl: "",
                action: "delete"
              }
            ]
          }
        ],
        helpMsg:
          "This is a list of documents you've sent to other parties for signature."
      };
    // completed documents report
    case "kQUoW4hUXz":
      return {
        reportName: "Completed Documents",
        heading: head,
        actions: [
          {
            btnId: "1378",
            hoverLabel: "Edit",
            btnColor: "#4bd396",
            textColor: "white",
            btnIcon: "fa fa-eye",
            redirectUrl: "draftDocument",
            action: "redirect"
          },
          {
            btnId: "1278",
            hoverLabel: "Delete",
            btnColor: "#ff4848",
            textColor: "white",
            btnIcon: "fa fa-trash",
            redirectUrl: "",
            action: "delete"
          }
        ],
        helpMsg:
          "This is a list of documents that have been signed by all parties."
      };
    //  declined documents report
    case "UPr2Fm5WY3":
      return {
        reportName: "Declined Documents",
        heading: head,
        actions: [
          {
            btnId: "1458",
            hoverLabel: "View",
            btnColor: "#4bd396",
            textColor: "white",
            btnIcon: "fa fa-eye",
            redirectUrl: "draftDocument",
            action: "redirect"
          },
          {
            btnId: "1358",
            hoverLabel: "Delete",
            btnColor: "#ff4848",
            textColor: "white",
            btnIcon: "fa fa-trash",
            redirectUrl: "",
            action: "delete"
          }
        ],
        helpMsg:
          "This is a list of documents that have been declined by one of the signers."
      };
    //  Expired Documents report
    case "zNqBHXHsYH":
      return {
        reportName: "Expired Documents",
        heading: head,
        actions: [
          {
            btnId: "1898",
            hoverLabel: "View",
            btnColor: "#4bd396",
            textColor: "white",
            btnIcon: "fa fa-eye",
            redirectUrl: "draftDocument",
            action: "redirect"
          },
          {
            btnId: "1998",
            hoverLabel: "Delete",
            btnColor: "#ff4848",
            textColor: "white",
            btnIcon: "fa fa-trash",
            redirectUrl: "",
            action: "delete"
          }
        ],
        helpMsg:
          "This is a list of documents that have reached their expiration date."
      };
    //  Recently sent for signatures report show on dashboard
    case "d9k3UfYHBc":
      return {
        reportName: "Recently sent for signatures",
        heading: dashboardReportHead,
        actions: [
          {
            btnId: "1999",
            hoverLabel: "Share",
            btnColor: "#4bd396",
            textColor: "white",
            btnIcon: "fa-solid fa-share",
            redirectUrl: "",
            action: "share"
          },
          {
            btnId: "1999",
            hoverLabel: "View",
            btnColor: "#3ac9d6",
            textColor: "white",
            btnIcon: "fa fa-eye",
            redirectUrl: "pdfRequestFiles",
            action: "redirect"
          },
          {
            btnId: "2234",
            hoverLabel: "option",
            btnColor: "transparent",
            textColor: "black",
            btnIcon: "fa-solid fa-ellipsis-vertical fa-lg",
            action: "option",
            subaction: [
              {
                btnId: "6788",
                btnLabel: "Revoke",
                hoverLabel: "Revoke",
                btnIcon: "fa-solid fa-file-circle-xmark",
                redirectUrl: "",
                action: "revoke"
              },
              {
                btnId: "2000",
                btnLabel: "Delete",
                hoverLabel: "Delete",
                btnIcon: "fa fa-trash",
                redirectUrl: "",
                action: "delete"
              }
            ]
          }
        ]
      };
    //  Recent signature requests report show on dashboard
    case "5Go51Q7T8r":
      return {
        reportName: "Recent signature requests",
        heading: dashboardReportHead,
        actions: [
          {
            btnId: "2001",
            btnLabel: "sign",
            hoverLabel: "Sign",
            btnColor: "#3ac9d6",
            textColor: "white",
            btnIcon: "fa-solid fa-signature",
            redirectUrl: "pdfRequestFiles",
            action: "redirect"
          }
        ]
      };
    // Drafts report show on dashboard
    case "kC5mfynCi4":
      return {
        reportName: "Drafts",
        heading: ["Title", "Note", "Folder", "File", "Owner", "Signers"],
        actions: [
          {
            btnId: "2003",
            hoverLabel: "Edit",
            btnColor: "#4bd396",
            textColor: "white",
            btnIcon: "fa-solid fa-pen",
            redirectUrl: "draftDocument",
            action: "redirect"
          },
          {
            btnId: "2004",
            hoverLabel: "Delete",
            btnColor: "#ff4848",
            textColor: "white",
            btnIcon: "fa fa-trash",
            redirectUrl: "",
            action: "delete"
          }
        ]
      };
    // contactbook report
    case "5KhaPr482K":
      return {
        reportName: "Contactbook",
        heading: contactbook,
        actions: [
          {
            btnId: "2204",
            hoverLabel: "Delete",
            btnColor: "#f55a42",
            textColor: "white",
            btnIcon: "fa-solid fa-trash",
            action: "delete"
          }
        ],
        form: "ContactBook",
        helpMsg:
          "This is a list of contacts/signers added by you. These will appear as suggestions when you try to add signers to a new document."
      };
    // template report
    case "6TeaPr321t":
      return {
        reportName: "Templates",
        heading: head,
        actions: [
          {
            btnId: "2234",
            btnLabel: "Use",
            hoverLabel: "Use",
            btnColor: "#4bd396",
            textColor: "white",
            btnIcon: "fa fa-plus",
            redirectUrl: "placeHolderSign",
            action: "redirect",
            selector: "reactourSecond",
            message:
              "Click the 'Use' button to create a new document from an existing template. "
          },
          {
            btnId: "2234",
            hoverLabel: "option",
            btnColor: "transparent",
            textColor: "black",
            btnIcon: "fa-solid fa-ellipsis-vertical fa-lg",
            action: "option",
            selector: "reactourThird",
            message:
              "This menu reveals more options such as Edit & Delete. Use the 'Edit' button to add signer roles, modify fields, and update your template. Changes will apply to all future documents created from this template but won’t affect existing documents.Use the Delete button you can delete template. ",
            subaction: [
              {
                btnId: "2434",
                btnLabel: "Edit",
                hoverLabel: "Edit",
                btnIcon: "fa-solid fa-pen",
                redirectUrl: "template",
                action: "redirect"
              },
              {
                btnId: "1834",
                btnLabel: "Delete",
                hoverLabel: "Delete",
                btnIcon: "fa fa-trash",
                redirectUrl: "",
                action: "delete"
              }
            ]
          }
        ],
        helpMsg:
          "This is a list of templates that are available to you for creating documents. You can click the 'use' button to create a new document using a template, modify the document & add signers in the next step."
      };
    default:
      return null;
  }
}
