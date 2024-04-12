import axios from 'axios';

const appId = process.env.APP_ID;
const serverUrl = process.env.SERVER_URL;
export function customAPIurl() {
  const url = new URL(process.env.SERVER_URL);
  return url.pathname === '/api/app' ? url.origin + '/api' : url.origin;
}

export const color = [
  '#93a3db',
  '#e6c3db',
  '#c0e3bc',
  '#bce3db',
  '#b8ccdb',
  '#ceb8db',
  '#ffccff',
  '#99ffcc',
  '#cc99ff',
  '#ffcc99',
  '#66ccff',
  '#ffffcc',
];

export function replaceMailVaribles(subject, body, variables) {
  let replacedSubject = subject;
  let replacedBody = body;

  for (const variable in variables) {
    const regex = new RegExp(`{{${variable}}}`, 'g');
    if (subject) {
      replacedSubject = replacedSubject.replace(regex, variables[variable]);
    }
    if (body) {
      replacedBody = replacedBody.replace(regex, variables[variable]);
    }
  }

  const result = {
    subject: replacedSubject,
    body: replacedBody,
  };
  return result;
}

export const saveFileUsage = async (size, imageUrl, userId) => {
  //checking server url and save file's size

  try {
    const tenantQuery = new Parse.Query('partners_Tenant');
    tenantQuery.equalTo('UserId', {
      __type: 'Pointer',
      className: '_User',
      objectId: userId,
    });
    const tenant = await tenantQuery.first();
    if (tenant) {
      const tenantPtr = {
        __type: 'Pointer',
        className: 'partners_Tenant',
        objectId: tenant.id,
      };
      const _tenantPtr = JSON.stringify(tenantPtr);
      try {
        const res = await axios.get(
          `${serverUrl}/classes/partners_TenantCredits?where={"PartnersTenant":${_tenantPtr}}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Parse-Application-Id': appId,
            },
          }
        );
        const response = res.data.results;

        let data;
        // console.log("response", response);
        if (response && response.length > 0) {
          data = {
            usedStorage: response[0].usedStorage ? response[0].usedStorage + size : size,
          };
          await axios.put(
            `${serverUrl}/classes/partners_TenantCredits/${response[0].objectId}`,
            data,
            {
              headers: {
                'Content-Type': 'application/json',
                'X-Parse-Application-Id': appId,
              },
            }
          );
        } else {
          data = { usedStorage: size, PartnersTenant: tenantPtr };
          await axios.post(`${serverUrl}/classes/partners_TenantCredits`, data, {
            headers: {
              'Content-Type': 'application/json',
              'X-Parse-Application-Id': appId,
            },
          });
        }
      } catch (err) {
        console.log('err in save usage', err);
      }
      saveDataFile(size, imageUrl, tenantPtr);
    }
  } catch (err) {
    console.log('err in fetch tenant Id', err);
  }
};

//function for save fileUrl and file size in particular client db class partners_DataFiles
const saveDataFile = async (size, imageUrl, tenantPtr) => {
  const data = {
    FileUrl: imageUrl,
    FileSize: size,
    TenantPtr: tenantPtr,
  };

  // console.log("data save",file, data)
  try {
    await axios.post(`${serverUrl}/classes/partners_DataFiles`, data, {
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': appId,
      },
    });
  } catch (err) {
    console.log('error in save usage ', err);
  }
};

export const updateMailCount = async extUserId => {
  // Update count in contracts_Users class
  const query = new Parse.Query('contracts_Users');
  query.equalTo('objectId', extUserId);

  try {
    const contractUser = await query.first({ useMasterKey: true });
    if (contractUser) {
      contractUser.increment('EmailCount', 1);
      await contractUser.save(null, { useMasterKey: true });
    } else {
      // Create new entry if not found
      const ContractsUsers = Parse.Object.extend('contracts_users');
      const newContractUser = new ContractsUsers();
      newContractUser.set('EmailCount', 1);
      await newContractUser.save(null, { useMasterKey: true });
    }
  } catch (error) {
    console.log('Error updating EmailCount in contracts_users: ' + error.message);
  }
};
