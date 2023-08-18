<template>
  <div>
    <div class="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
        <div class="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
            <div class="sticky top-0 p-4 bg-gray-100 rounded-xl w-full">
              <Sidebar />
            </div>
            <div class="bg-gray-50 rounded-xl border my-3 w-full">
                <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span class="block text-indigo-600 overflow-ellipsis">Made with Tailwind CSS!</span>
                    </h2>
                </div>
            </div>
        </div>
        <main role="main" class="w-full h-full flex-grow p-3 overflow-auto">
          <NuxtPage />
        </main>
    </div>
    <Footer />
  </div>
</template>
