import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.jsonbin.io/v3/b/",
  headers: {
    "content-type": "application/json",
  },
});

const axiosObj = {
  baseURL: "https://api.jsonbin.io/v3/b/",
  addTask: (payload) =>
    instance({
      method: "POST",
      url: "/tasks",
      data: {
        name: payload.task,
      },
      headers: {
        "content-type": "application/json",
      },
    }),

  getData: () =>
    instance({
      method: "GET",
      url: "/60a5f7474e1de86b45d25ac3",
      headers: {
        "content-type": "application/json",
        "X-Master-Key": `$2b$10$WrRCMMFKq488AGbY55dy0OawUwz.sxJp6qVbfIAL1tXfhFsG6VPo.`,
      },
    }),

  //   deleteTask: (id) =>
  //     instance({
  //       method: "DELETE",
  //       url: `/tasks/${id}`,
  //       headers: {
  //         Authorization: `Bearer ${UserData.token}`,
  //       },
  //     }),
  //   editTask: (task) =>
  //     instance({
  //       method: "PUT",
  //       url: `/tasks/${task._id}`,
  //       data: {
  //         name: task.name,
  //         completed: task.completed,
  //       },
  //       headers: {
  //         Authorization: `Bearer ${UserData.token}`,
  //       },
  //     }),
};
export default axiosObj;
