<script>
  //import images
  import WorkinProgress from "../assets/workinprogress";
  import ReadyforDev from "../assets/readyfordev";
  import ProductMarketing from "../assets/productmarketing";
  import Archive from "../assets/archive";

  //import styles
  import { Type } from "figma-plugin-ds-svelte";

  // Function to send the template selected to the TS file
  function createPages(e) {
    parent.postMessage(
      {
        pluginMessage: {
          type: "create-pages",
          template: e.target.id,
        },
      },
      "*"
    );
  }
</script>

<!-- <p class="text-xs mb-4">Select a template below to get started.</p> -->
<Type size="small">Select a template below to get started.</Type>
<div class="mt-4 flex flex-wrap">
  <button on:click={createPages} 
    id="workinprogress" class="template-option-workinprogress">Work in Progress</button>
  <button on:click={createPages}
    id="readyfordev" class="template-option-readyfordev">Ready for Development</button>
  <button on:click={createPages}
    id="productmarketing" class="template-option-productmarketing">Marketing</button>
  <button on:click={createPages}
    id="archive" class="template-option-archive">Archive</button>
</div>
