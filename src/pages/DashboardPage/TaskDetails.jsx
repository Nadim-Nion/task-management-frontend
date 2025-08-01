import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Calendar, Edit2, ArrowLeft } from "lucide-react";
import taskAvatar from "../../assets/images/task-avatar.png"; // replace with actual path

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  console.log("id:", id);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch(
          `https://task-management-backend-teal-three.vercel.app/api/v1/tasks/${id}`
        );
        const data = await res.json();
        console.log("fetched task:", data.data);
        setTask(data.data);
        setStatus(data.data.taskStatus);
      } catch (err) {
        console.error("Failed to fetch task", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleDelete = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirm) return;

    await fetch(
      `https://task-management-backend-teal-three.vercel.app/api/v1/tasks/${id}`,
      { method: "DELETE" }
    );

    navigate("/");
  };

  const handleSubmit = async () => {
    await fetch(
      `https://task-management-backend-teal-three.vercel.app/api/v1/tasks/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskStatus: status }),
      }
    );

    alert("Task status updated!");
  };

  const handleEdit = () => navigate(`/tasks/edit/${id}`);
  const handleBack = () => navigate("/");

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (!task) return <div className="text-center p-10">Task not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold">Task Details</h1>
        <div className="flex space-x-2">
          <button
            onClick={handleEdit}
            className="flex items-center bg-yellow-100 text-yellow-700 px-3 py-1 rounded hover:bg-yellow-200 text-sm"
          >
            <Edit2 className="w-4 h-4 mr-1" />
            Edit Task
          </button>
          <button
            onClick={handleBack}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded text-sm"
          >
            Back
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl p-6 shadow space-y-6">
        {/* Task Header */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
            <img src={taskAvatar} alt="Task" className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{task.taskCategory}</h2>
            <p className="text-sm text-gray-500 max-w-xl">{task.details}</p>
          </div>
        </div>

        {/* End Date & Status */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-1" />
              <span>End Date:</span>
              <span className="ml-1 font-medium text-gray-800">
                {new Date(task.endDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="text-orange-500 font-semibold text-sm flex items-center ml-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              {task.taskStatus}
            </div>
          </div>
        </div>

        {/* Status Change */}
        <div className="w-full md:w-1/3">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Change Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
          >
            <option value="Pending">Pending</option>
            <option value="InProgress">InProgress</option>
            <option value="Collaborative Task">Collaborative Task</option>
            <option value="Done">Done</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mt-8">
          <button
            onClick={handleDelete}
            className="bg-red-100 text-red-600 px-6 py-2 rounded hover:bg-red-200"
          >
            Delete Task
          </button>
          <button
            onClick={handleSubmit}
            className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
