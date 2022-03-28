import axios from "axios";
import { getToken } from "../../shared/utils";

export default class reminderApi {
  constructor() {
    this.base = process.env.REACT_APP_SERVER;
  }

  async getReminder() {
    const getReminderConfig = {
      method: "GET",
      url: `${this.base}/api/reminders`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(getReminderConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async postReminder(remindData) {
    const postReminderConfig = {
      method: "POST",
      url: `${this.base}/api/reminders`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: remindData,
    };
    return axios(postReminderConfig)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  async patchReminder(remindData) {
    console.log(remindData)
    const patchReminderConfig = {
      method: "PATCH",
      url: `${this.base}/api/reminders`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: remindData,
    };
    return axios(patchReminderConfig)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  async deleteReminder(remindData) {
    console.log(remindData)
    const deleteReminderConfig = {
      method: "DELETE",
      url: `${this.base}/api/reminders`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: remindData,
    };
    return axios(deleteReminderConfig)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  
}
