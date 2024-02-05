import pages from "./data/pages";

figma.showUI(__html__, { themeColors: true, width: 240, height: 408 });

figma.ui.onmessage = (msg) => {
  if (msg.type === "create-pages") {
    if (msg.template === "workinprogress") {
      for (let page of pages.workinprogress.slice(1)) {
        let newPage = figma.createPage();
        newPage.name = page;
      }
      figma.currentPage.name = pages.workinprogress[0];
      figma.notify("✅ Successfully created");

    } else if (msg.template === "readyfordev") {
      for (let page of pages.readyfordev.slice(1)) {
        let newPage = figma.createPage();
        newPage.name = page;
      }
      figma.currentPage.name = pages.readyfordev[0];
      figma.notify("✅ Successfully created");
      
    } else if (msg.template === "productmarketing") {
      for (let page of pages.productmarketing.slice(1)) {
        let newPage = figma.createPage();
        newPage.name = page;
      }
      figma.currentPage.name = pages.productmarketing[0];
      figma.notify("✅ Successfully created");

    } else if (msg.template === "archive") {
      for (let page of pages.archive.slice(1)) {
        let newPage = figma.createPage();
        newPage.name = page;
      }
      figma.currentPage.name = pages.archive[0];
      figma.notify("✅ Successfully created");
    }
    
  } else if (msg.type === "create-custom-pages") {
    if (msg.customPages.length === 0) {
      figma.notify("❌ Please add pages to the list before creating them!");
    } else {
      for (let page of msg.customPages.slice(1)) {
        let newPage = figma.createPage();
        newPage.name = page;
      }
      figma.currentPage.name = msg.customPages[0];
      figma.notify("✅ Pages created!");
    }
  }
  figma.closePlugin();
};