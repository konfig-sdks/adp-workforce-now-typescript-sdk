<div align="center">

[![Visit Adp](./header.png)](https://adp.com)

# [Adp](https://adp.com)<a id="adp"></a>

ADP API endpoints.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`adpworkforcenow.hR.checkAsyncRequestStatus`](#adpworkforcenowhrcheckasyncrequeststatus)
  * [`adpworkforcenow.hR.getWorkerByAoid`](#adpworkforcenowhrgetworkerbyaoid)
  * [`adpworkforcenow.hR.getWorkerDemographicsByAoid`](#adpworkforcenowhrgetworkerdemographicsbyaoid)
  * [`adpworkforcenow.hR.listTop5PreventCache`](#adpworkforcenowhrlisttop5preventcache)
  * [`adpworkforcenow.hR.listTop5PreventCache_0`](#adpworkforcenowhrlisttop5preventcache_0)
  * [`adpworkforcenow.payroll.listPayrollOutputs`](#adpworkforcenowpayrolllistpayrolloutputs)
  * [`adpworkforcenow.tokenRequest.createWithAuthorizationHeader`](#adpworkforcenowtokenrequestcreatewithauthorizationheader)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=ADP&serviceName=WorkforceNow&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { AdpWorkforceNow } from "adp-workforce-now-typescript-sdk";

const adpworkforcenow = new AdpWorkforceNow({
  // Defining the base path is optional and defaults to http://}
  // basePath: "http://}",
});

const checkAsyncRequestStatusResponse =
  await adpworkforcenow.hR.checkAsyncRequestStatus({
    $select: "processingStatus",
  });

console.log(checkAsyncRequestStatusResponse);
```

## Reference<a id="reference"></a>


### `adpworkforcenow.hR.checkAsyncRequestStatus`<a id="adpworkforcenowhrcheckasyncrequeststatus"></a>

Check the status of an async request to the Worker API given the key returned as part of the original asyn response's "link" header.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkAsyncRequestStatusResponse =
  await adpworkforcenow.hR.checkAsyncRequestStatus({
    $select: "processingStatus",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

##### $select: `string`<a id="select-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/core/v1/operations/workerInformationManagement/hr.v2.workers/{key}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `adpworkforcenow.hR.getWorkerByAoid`<a id="adpworkforcenowhrgetworkerbyaoid"></a>

Request a single worker given their AOID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkerByAoidResponse = await adpworkforcenow.hR.getWorkerByAoid({
  preventCache: "TIMESTAMP",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### anthonyAlbrightAoid: `string`<a id="anthonyalbrightaoid-string"></a>

##### preventCache: `string`<a id="preventcache-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/hr/v2/workers/{anthony-albright-aoid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `adpworkforcenow.hR.getWorkerDemographicsByAoid`<a id="adpworkforcenowhrgetworkerdemographicsbyaoid"></a>

Request demographic data for a single worker given their AOID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkerDemographicsByAoidResponse =
  await adpworkforcenow.hR.getWorkerDemographicsByAoid({
    preventCache: "TIMESTAMP",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### anthonyAlbrightAoid: `string`<a id="anthonyalbrightaoid-string"></a>

##### preventCache: `string`<a id="preventcache-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/hr/v2/worker-demographics/{anthony-albright-aoid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `adpworkforcenow.hR.listTop5PreventCache`<a id="adpworkforcenowhrlisttop5preventcache"></a>

Request a collection of the top 5 workers using a URI cache-buster.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTop5PreventCacheResponse =
  await adpworkforcenow.hR.listTop5PreventCache({
    $top: "5",
    preventCache: "TIMESTAMP",
    $filter:
      "workers/workAssignments/homeOrganizationalUnits/typeCode/codeValue eq 'Department' and workers/workAssignments/homeOrganizationalUnits/nameCode/codeValue eq '001000'",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### $top: `string`<a id="top-string"></a>

##### preventCache: `string`<a id="preventcache-string"></a>

##### $filter: `string`<a id="filter-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/hr/v2/workers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `adpworkforcenow.hR.listTop5PreventCache_0`<a id="adpworkforcenowhrlisttop5preventcache_0"></a>

Request demographic data for a collection of the top 5 workers using a URI cache-buster.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTop5PreventCache_0Response =
  await adpworkforcenow.hR.listTop5PreventCache_0({
    $top: "5",
    preventCache: "TIMESTAMP",
    $filter:
      "workers/workAssignments/homeOrganizationalUnits/typeCode/codeValue eq 'Department' and workers/workAssignments/homeOrganizationalUnits/nameCode/codeValue eq '001000'",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### $top: `string`<a id="top-string"></a>

##### preventCache: `string`<a id="preventcache-string"></a>

##### $filter: `string`<a id="filter-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/hr/v2/worker-demographics` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `adpworkforcenow.payroll.listPayrollOutputs`<a id="adpworkforcenowpayrolllistpayrolloutputs"></a>

Fetches a list of payroll outputs given a Region Code, Company Code, Year and Week.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPayrollOutputsResponse =
  await adpworkforcenow.payroll.listPayrollOutputs({
    $filter:
      "payrollScheduleReference/payrollYear eq 2018 and payrollScheduleReference/payrollWeekNumber eq 10 and payrollGroupCode/codeValue eq %26Y%26 and payrollRegionCode/codeValue eq BALT",
    $count: "true",
    useCache: "false",
    level: "details",
    $select:
      "earnings,reportableEarningsAndBenefits,reimbursements,statutoryDeductions,nonStatutoryDeductions,memos,configurationTags",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### $filter: `string`<a id="filter-string"></a>

##### $count: `string`<a id="count-string"></a>

##### useCache: `string`<a id="usecache-string"></a>

##### level: `string`<a id="level-string"></a>

##### $select: `string`<a id="select-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payroll/v1/payroll-output` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `adpworkforcenow.tokenRequest.createWithAuthorizationHeader`<a id="adpworkforcenowtokenrequestcreatewithauthorizationheader"></a>

A request to get an OAuth bearer token for our demo ADP Workforce Now by adding an Authorization header containing the base-64 encoded credentials.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createWithAuthorizationHeaderResponse =
  await adpworkforcenow.tokenRequest.createWithAuthorizationHeader({
    grantType: "client_credentials",
    clientId: "{{client-id}}",
    clientSecret: "{{client-secret}}",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### grantType: `string`<a id="granttype-string"></a>

##### clientId: `string`<a id="clientid-string"></a>

##### clientSecret: `string`<a id="clientsecret-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/auth/oauth/v2/token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
