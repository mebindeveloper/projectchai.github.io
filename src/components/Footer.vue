<template>
      <nav
        class="
          mx-auto
          md:flex md:justify-between md:items-center
          p-0
          h-11
          font-medium
        "
      >
        <div class="flex items-center justify-between text-2xl">
            Open Enterprise
        </div>
        <ul
          class="
            flex-col
            md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 text-xl
          "
        >
          <li class=" hover:text-green">Documentation</li>
          <li class=" hover:text-green">GitHub</li>
          <li class=" hover:text-green">Twitter</li>
          <li class="text-green hover:text-primary">Contact us</li>
        </ul>
      </nav>
  </template>
  <script>
  export default { 
    name:'Footer'
  };
  </script>