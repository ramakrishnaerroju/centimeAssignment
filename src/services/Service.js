import Logger from "../logger/Logger";
import httpService from "../common/httpService";
import Constants from "../util/Constants";

export default class Service {
  static async fetchSankeyData() {
    Logger.info(`[Sankey Data] getData :: ${Constants.GET_DATA} ...`);
    const response = await httpService.get(Constants.GET_DATA);

    Logger.info(`[Sankey Data] :: ${response}`);
    return response.data.record.data;
  }
}
