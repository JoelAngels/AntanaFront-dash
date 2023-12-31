/* eslint-disable no-lone-blocks */

//This is the code that holds the whole information in the dashboard.js
{
  /* <div className="mt-4">
                <h1 className="sr-only">Recent questions</h1>
                <ul role="list" className="space-y-4">
                  {questions.map((question) => (
                    <li
                      key={question.id}
                      className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg"
                    >
                      <article
                        aria-labelledby={"question-title-" + question.id}
                      >
                        <div>
                          <div className="flex space-x-3">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={question.author.imageUrl}
                                alt=""
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                <a
                                  href={question.author.href}
                                  className="hover:underline"
                                >
                                  {question.author.name}
                                </a>
                              </p>
                              <p className="text-sm text-gray-500">
                                <a
                                  href={question.href}
                                  className="hover:underline"
                                >
                                  <time dateTime={question.datetime}>
                                    {question.date}
                                  </time>
                                </a>
                              </p>
                            </div>
                            <div className="flex-shrink-0 self-center flex">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                                    <span className="sr-only">
                                      Open options
                                    </span>
                                    <DotsVerticalIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                              "flex px-4 py-2 text-sm"
                                            )}
                                          >
                                            <StarIcon
                                              className="mr-3 h-5 w-5 text-gray-400"
                                              aria-hidden="true"
                                            />
                                            <span>Add to favorites</span>
                                          </a>
                                        )}
                                      </Menu.Item>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                              "flex px-4 py-2 text-sm"
                                            )}
                                          >
                                            <CodeIcon
                                              className="mr-3 h-5 w-5 text-gray-400"
                                              aria-hidden="true"
                                            />
                                            <span>Embed</span>
                                          </a>
                                        )}
                                      </Menu.Item>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                              "flex px-4 py-2 text-sm"
                                            )}
                                          >
                                            <FlagIcon
                                              className="mr-3 h-5 w-5 text-gray-400"
                                              aria-hidden="true"
                                            />
                                            <span>Report content</span>
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </div>
                          </div>
                          <h2
                            id={"question-title-" + question.id}
                            className="mt-4 text-base font-medium text-gray-900"
                          >
                            {question.title}
                          </h2>
                        </div>
                        <div
                          className="mt-2 text-sm text-gray-700 space-y-4"
                          dangerouslySetInnerHTML={{ __html: question.body }}
                        />
                        <div className="mt-6 flex justify-between space-x-8">
                          <div className="flex space-x-6">
                            <span className="inline-flex items-center text-sm">
                              <button
                                type="button"
                                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                              >
                                <ThumbUpIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                                <span className="font-medium text-gray-900">
                                  {question.likes}
                                </span>
                                <span className="sr-only">likes</span>
                              </button>
                            </span>
                            <span className="inline-flex items-center text-sm">
                              <button
                                type="button"
                                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                              >
                                <ChatAltIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                                <span className="font-medium text-gray-900">
                                  {question.replies}
                                </span>
                                <span className="sr-only">replies</span>
                              </button>
                            </span>
                            <span className="inline-flex items-center text-sm">
                              <button
                                type="button"
                                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                              >
                                <EyeIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                                <span className="font-medium text-gray-900">
                                  {question.views}
                                </span>
                                <span className="sr-only">views</span>
                              </button>
                            </span>
                          </div>
                          <div className="flex text-sm">
                            <span className="inline-flex items-center text-sm">
                              <button
                                type="button"
                                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                              >
                                <ShareIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                                <span className="font-medium text-gray-900">
                                  Share
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </div> */
}

//This is the whole code for navbar

// <Popover
// as="header"
// className={({ open }) =>
//   classNames(
//     open ? "fixed inset-0 z-40 overflow-y-auto" : "",
//     "bg-white shadow-sm lg:static lg:overflow-y-visible"
//   )
// }
// >
// {({ open }) => (
//   <>
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
//         <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
//           <div className="flex-shrink-0 flex items-center">
//             <a href="#">
//               <img
//                 className="block h-8 w-auto"
//                 src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500"
//                 alt="Workflow"
//               />
//             </a>
//           </div>
//         </div>
//         <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
//           <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
//             <div className="w-full">
//               <label htmlFor="search" className="sr-only">
//                 Search
//               </label>
//               <div className="relative">
//                 <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
//                   <SearchIcon
//                     className="h-5 w-5 text-gray-400"
//                     aria-hidden="true"
//                   />
//                 </div>
//                 <input
//                   id="search"
//                   name="search"
//                   className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
//                   placeholder="Search"
//                   type="search"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
//           {/* Mobile menu button */}
//           <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
//             <span className="sr-only">Open menu</span>
//             {open ? (
//               <XIcon className="block h-6 w-6" aria-hidden="true" />
//             ) : (
//               <MenuIcon
//                 className="block h-6 w-6"
//                 aria-hidden="true"
//               />
//             )}
//           </Popover.Button>
//         </div>
//         <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
//           <a
//             href="#"
//             className="text-sm font-medium text-gray-900 hover:underline"
//           >
//             Go Premium
//           </a>
//           <a
//             href="#"
//             className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
//           >
//             <span className="sr-only">View notifications</span>
//             <BellIcon className="h-6 w-6" aria-hidden="true" />
//           </a>

//           {/* Profile dropdown */}
//           <Menu as="div" className="flex-shrink-0 relative ml-5">
//             <div>
//               <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
//                 <span className="sr-only">Open user menu</span>
//                 <img
//                   className="h-8 w-8 rounded-full"
//                   src={user.imageUrl}
//                   alt=""
//                 />
//               </Menu.Button>
//             </div>
//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-100"
//               enterFrom="transform opacity-0 scale-95"
//               enterTo="transform opacity-100 scale-100"
//               leave="transition ease-in duration-75"
//               leaveFrom="transform opacity-100 scale-100"
//               leaveTo="transform opacity-0 scale-95"
//             >
//               <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
//                 {userNavigation.map((item) => (
//                   <Menu.Item key={item.name}>
//                     {({ active }) => (
//                       <a
//                         href={item.href}
//                         className={classNames(
//                           active ? "bg-gray-100" : "",
//                           "block py-2 px-4 text-sm text-gray-700"
//                         )}
//                       >
//                         {item.name}
//                       </a>
//                     )}
//                   </Menu.Item>
//                 ))}
//               </Menu.Items>
//             </Transition>
//           </Menu>

//           <a
//             href="#"
//             className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
//           >
//             New Post
//           </a>
//         </div>
//       </div>
//     </div>

//     <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
//       <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
//         {navigation.map((item) => (
//           <a
//             key={item.name}
//             href={item.href}
//             aria-current={item.current ? "page" : undefined}
//             className={classNames(
//               item.current
//                 ? "bg-gray-100 text-gray-900"
//                 : "hover:bg-gray-50",
//               "block rounded-md py-2 px-3 text-base font-medium"
//             )}
//           >
//             {item.name}
//           </a>
//         ))}
//       </div>
//       <div className="border-t border-gray-200 pt-4">
//         <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
//           <div className="flex-shrink-0">
//             <img
//               className="h-10 w-10 rounded-full"
//               src={user.imageUrl}
//               alt=""
//             />
//           </div>
//           <div className="ml-3">
//             <div className="text-base font-medium text-gray-800">
//               {user.name}
//             </div>
//             <div className="text-sm font-medium text-gray-500">
//               {user.email}
//             </div>
//           </div>
//           <button
//             type="button"
//             className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
//           >
//             <span className="sr-only">View notifications</span>
//             <BellIcon className="h-6 w-6" aria-hidden="true" />
//           </button>
//         </div>
//         <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
//           {userNavigation.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>
//       </div>

//       <div className="mt-6 max-w-3xl mx-auto px-4 sm:px-6">
//         <a
//           href="#"
//           className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700"
//         >
//           New Post
//         </a>

//         <div className="mt-6 flex justify-center">
//           <a
//             href="#"
//             className="text-base font-medium text-gray-900 hover:underline"
//           >
//             Go Premium
//           </a>
//         </div>
//       </div>
//     </Popover.Panel>
//   </>
// )}
// </Popover>

//This is the full code for the side posts
{
  /* <aside className="hidden xl:block xl:col-span-4">
<div className="sticky top-4 space-y-4">
  <section aria-labelledby="who-to-follow-heading">
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2
          id="who-to-follow-heading"
          className="text-base font-medium text-gray-900"
        >
          Who to follow
        </h2>
        <div className="mt-6 flow-root">
          <ul
            role="list"
            className="-my-4 divide-y divide-gray-200"
          >
            {whoToFollow.map((user) => (
              <li
                key={user.handle}
                className="flex items-center py-4 space-x-3"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    <a href={user.href}>{user.name}</a>
                  </p>
                  <p className="text-sm text-gray-500">
                    <a href={user.href}>{"@" + user.handle}</a>
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100"
                  >
                    <PlusSmIcon
                      className="-ml-1 mr-0.5 h-5 w-5 text-rose-400"
                      aria-hidden="true"
                    />
                    <span>Follow</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <a
            href="#"
            className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            View all
          </a>
        </div>
      </div>
    </div>
  </section>
  <section aria-labelledby="trending-heading">
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2
          id="trending-heading"
          className="text-base font-medium text-gray-900"
        >
          Trending
        </h2>
        <div className="mt-6 flow-root">
          <ul
            role="list"
            className="-my-4 divide-y divide-gray-200"
          >
            {trendingPosts.map((post) => (
              <li key={post.id} className="flex py-4 space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={post.user.imageUrl}
                    alt={post.user.name}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-800">
                    {post.body}
                  </p>
                  <div className="mt-2 flex">
                    <span className="inline-flex items-center text-sm">
                      <button
                        type="button"
                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                      >
                        <ChatAltIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                        <span className="font-medium text-gray-900">
                          {post.comments}
                        </span>
                      </button>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <a
            href="#"
            className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            View all
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
</aside> */
}
