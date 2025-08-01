/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import {
  ChevronDown,
  Plus,
  User,
  List,
  Zap,
  Calendar,
  Trash2,
} from "lucide-react";
import taskAvatar from "../../assets/images/task-avatar.png";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(
    "Select Task Category"
  );
  const [selectedStatus, setSelectedStatus] = useState("Pending");
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);

        // Replace this URL with your real API endpoint
        const response = await fetch(
          "https://task-management-backend-teal-three.vercel.app/api/v1/tasks"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const data = await response.json();
        console.log("fetched tasks:", data.data);
        setTasks(data.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const categories = [
    { name: "Arts and Craft", checked: false },
    { name: "Nature", checked: false },
    { name: "Family", checked: true },
    { name: "Sport", checked: false },
    { name: "Friends", checked: false },
    { name: "Meditation", checked: false },
  ];

  const statusOptions = [
    { name: "All Task", checked: false },
    { name: "Ongoing", checked: false },
    { name: "Pending", checked: true },
    { name: "Collaborative Task", checked: false },
    { name: "Done", checked: false },
  ];

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-800 flex items-center justify-center">
        <div className="text-white text-lg">Loading tasks...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-800">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-white">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">T</span>
            </div>
            <span className="text-lg sm:text-xl font-bold">Tasko</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors">
              <List className="w-4 h-4" />
              <span>Task List</span>
            </button>
            <button className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors">
              <Zap className="w-4 h-4" />
              <span>Spin</span>
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-2 text-white">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="hidden sm:block font-medium">Thomas M.</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </nav>

        {/* Welcome Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="text-white mb-6 lg:mb-0">
            <p className="text-sm sm:text-base opacity-90 mb-2">Hi Thomas</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
              Welcome to Dashboard
            </h1>
          </div>

          {/* Illustration - Hidden on smaller screens */}
          <div className="hidden lg:block w-64 xl:w-80 opacity-70">
            <div className="w-full h-32 xl:h-40 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white/50 text-sm">
                Dashboard Illustration
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 xl:px-12 pb-8">
        <div className="bg-white rounded-t-3xl min-h-[60vh] p-4 sm:p-6 lg:p-8">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              All Task List
            </h2>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              {/* Category Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  className="w-full sm:w-48 px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-left flex items-center justify-between hover:border-gray-400 transition-colors"
                >
                  <span className="text-gray-700 text-sm">
                    {selectedCategory}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 py-2">
                    {categories.map((category, index) => (
                      <label
                        key={index}
                        className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={category.checked}
                          className="w-4 h-4 text-emerald-600 rounded mr-3"
                          readOnly
                        />
                        <span className="text-sm text-gray-700">
                          {category.name}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Status Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                  className="w-full sm:w-32 px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-left flex items-center justify-between hover:border-gray-400 transition-colors"
                >
                  <span className="text-gray-700 text-sm">
                    {selectedStatus}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {statusDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 py-2">
                    {statusOptions.map((status, index) => (
                      <label
                        key={index}
                        className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={status.checked}
                          className="w-4 h-4 text-emerald-600 rounded mr-3"
                          readOnly
                        />
                        <span className="text-sm text-gray-700">
                          {status.name}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Add New Task Button */}
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-lg flex items-center space-x-2 transition-colors text-sm font-medium">
                <Plus className="w-4 h-4" />
                <span>Add New Task</span>
              </button>
            </div>
          </div>

          {/* Task Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
            {tasks?.map((task) => (
              <div
                key={task._id}
                onClick={() => navigate(`/tasks/${task._id}`)}
                className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow relative group"
              >
                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="absolute top-4 right-4 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                {/* Task Icon */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-emerald-600 font-bold text-sm">
                      <img src={taskAvatar} alt="Task Avatar" />
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                      {task.taskCategory}
                    </h3>
                  </div>
                </div>

                {/* Task Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {task.details}
                </p>

                {/* Task Footer */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span>{task.endDate}</span>
                  </div>
                  <span className="bg-pink-100 text-pink-600 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    {task.taskStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {tasks.length === 0 && (
            <div className="flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 xl:py-20 px-4">
              {/* Illustration Container */}
              <div className="relative mb-6 sm:mb-8 lg:mb-10">
                {/* Background Elements */}
                <div className="relative w-64 h-48 sm:w-80 sm:h-60 lg:w-96 lg:h-72 xl:w-[420px] xl:h-80">
                  {/* Clouds */}
                  <div className="absolute top-2 left-8 w-12 h-6 sm:w-16 sm:h-8 bg-blue-100 rounded-full opacity-60"></div>
                  <div className="absolute top-4 right-12 w-8 h-4 sm:w-10 sm:h-5 bg-blue-100 rounded-full opacity-40"></div>
                  <div className="absolute top-0 right-4 w-14 h-7 sm:w-18 sm:h-9 bg-blue-100 rounded-full opacity-50"></div>
                  <div className="absolute top-6 left-20 w-10 h-5 sm:w-12 sm:h-6 bg-blue-100 rounded-full opacity-30"></div>

                  {/* Clock */}
                  <div className="absolute top-6 right-8 sm:top-8 sm:right-12">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-blue-300 rounded-full relative">
                      <div className="absolute top-1/2 left-1/2 w-0.5 h-3 sm:h-4 bg-blue-400 transform -translate-x-1/2 -translate-y-full origin-bottom rotate-45"></div>
                      <div className="absolute top-1/2 left-1/2 w-0.5 h-2 sm:h-2.5 bg-blue-600 transform -translate-x-1/2 -translate-y-full origin-bottom rotate-90"></div>
                      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>

                  {/* Decorative dots */}
                  <div className="absolute top-12 left-4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-red-400 rounded-full"></div>
                  <div className="absolute top-20 right-6 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full"></div>
                  <div className="absolute bottom-20 left-12 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full"></div>
                  <div className="absolute bottom-16 right-16 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full"></div>

                  {/* Central Character and Box */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    {/* Large Orange Box */}
                    <div className="relative">
                      <div className="w-20 h-16 sm:w-24 sm:h-20 lg:w-28 lg:h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-lg transform rotate-12 mb-2"></div>

                      {/* Person pushing the box */}
                      <div className="absolute -right-8 sm:-right-10 bottom-0 w-12 h-16 sm:w-14 sm:h-20">
                        {/* Head */}
                        <div className="w-6 h-6 sm:w-7 sm:h-7 bg-pink-300 rounded-full mb-1 mx-auto"></div>
                        {/* Body */}
                        <div className="w-8 h-8 sm:w-9 sm:h-10 bg-purple-500 rounded-t-lg mx-auto mb-1"></div>
                        {/* Legs */}
                        <div className="flex justify-center space-x-1">
                          <div className="w-2 h-4 sm:w-2.5 sm:h-5 bg-gray-700 rounded-b"></div>
                          <div className="w-2 h-4 sm:w-2.5 sm:h-5 bg-gray-700 rounded-b"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Small decorative icons */}
                  <div className="absolute bottom-4 left-8">
                    <div className="w-6 h-8 sm:w-8 sm:h-10 bg-blue-200 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 rounded"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-20">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-200 rounded-lg flex items-center justify-center">
                      <div className="text-green-600 text-xs sm:text-sm font-bold">
                        +
                      </div>
                    </div>
                  </div>

                  {/* Ground elements */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-2 sm:w-40 sm:h-3 bg-gradient-to-r from-green-200 via-green-300 to-green-200 rounded-full opacity-60"></div>

                  {/* Small grass elements */}
                  <div className="absolute bottom-2 left-1/4 w-2 h-3 sm:w-3 sm:h-4 bg-green-400 rounded-t-full"></div>
                  <div className="absolute bottom-2 right-1/4 w-2 h-3 sm:w-3 sm:h-4 bg-green-400 rounded-t-full"></div>
                  <div className="absolute bottom-1 left-1/3 w-1.5 h-2 sm:w-2 sm:h-3 bg-green-500 rounded-t-full"></div>
                  <div className="absolute bottom-1 right-1/3 w-1.5 h-2 sm:w-2 sm:h-3 bg-green-500 rounded-t-full"></div>

                  {/* Question marks */}
                  <div className="absolute top-16 left-1/4 text-gray-400 text-sm sm:text-base font-bold">
                    ?
                  </div>
                  <div className="absolute top-24 right-1/4 text-gray-400 text-xs sm:text-sm font-bold">
                    ?
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center max-w-md mx-auto">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
                  No Task is Available yet, Please Add your New Task
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                  {tasks.length === 0
                    ? "Create your first task to get started with your productivity journey"
                    : "Try adjusting your filters to find the tasks you're looking for"}
                </p>
              </div>

              {/* Optional CTA Button for mobile users */}
              <div className="mt-6 sm:mt-8 block sm:hidden">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors text-sm font-medium">
                  <Plus className="w-4 h-4" />
                  <span>Add Your First Task</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
