/*
ADP APIs

ADP API endpoints.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  HRApi,
  PayrollApi,
  TokenRequestApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { AdpWorkforceNowCustom } from "./client-custom";

export class AdpWorkforceNow extends AdpWorkforceNowCustom {
  readonly hR: HRApi;
  readonly payroll: PayrollApi;
  readonly tokenRequest: TokenRequestApi;

  constructor(configurationParameters: ConfigurationParameters = {}) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.hR = new HRApi(configuration);
    this.payroll = new PayrollApi(configuration);
    this.tokenRequest = new TokenRequestApi(configuration);
  }

}