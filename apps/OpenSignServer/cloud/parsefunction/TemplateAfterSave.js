export default async function TemplateAfterSave(request) {
  try {
    if (!request.original) {
      console.log('new entry is insert in contracts_Template');
      // update acl of New Document If There are signers present in array
      const signers = request.object.get('Signers');

      if (signers && signers.length > 0) {
        await updateAclDoc(request.object.id);
      } else {
        await updateSelfDoc(request.object.id);
      }
    } else {
      if (request.user) {
        const signers = request.object.get('Signers');
        if (signers && signers.length > 0) {
          await updateAclDoc(request.object.id);
        } else {
          await updateSelfDoc(request.object.id);
        }
      }
    }
  } catch (err) {
    console.log('err in aftersave of contracts_Template');
    console.log(err);
  }

  async function updateAclDoc(objId) {
    // console.log("In side updateAclDoc func")
    // console.log(objId)
    const Query = new Parse.Query('contracts_Template');
    Query.include('Signers');
    const updateACL = await Query.get(objId, { useMasterKey: true });
    const res = JSON.parse(JSON.stringify(updateACL));
    // console.log("res");
    // console.log(JSON.stringify(res));
    const UsersPtr = res.Signers.map(item => item.UserId);

    if (res.Signers[0].ExtUserPtr) {
      const ExtUserSigners = res.Signers.map(item => {
        return {
          __type: 'Pointer',
          className: 'contracts_Users',
          objectId: item.ExtUserPtr.objectId,
        };
      });
      updateACL.set('Signers', ExtUserSigners);
    }

    // console.log("UsersPtr")
    // console.log(JSON.stringify(UsersPtr))
    const newACL = new Parse.ACL();
    newACL.setPublicReadAccess(false);
    newACL.setPublicWriteAccess(false);
    newACL.setReadAccess(request.user, true);
    newACL.setWriteAccess(request.user, true);

    UsersPtr.forEach(x => {
      newACL.setReadAccess(x.objectId, true);
      newACL.setWriteAccess(x.objectId, true);
    });

    updateACL.setACL(newACL);
    updateACL.save(null, { useMasterKey: true });
  }

  async function updateSelfDoc(objId) {
    // console.log("Inside updateSelfDoc func")
    
    const Query = new Parse.Query('contracts_Template');
    const updateACL = await Query.get(objId, { useMasterKey: true });
    // const res = JSON.parse(JSON.stringify(updateACL));
    // console.log("res");
    // console.log(JSON.stringify(res));
    const newACL = new Parse.ACL();
    newACL.setPublicReadAccess(false);
    newACL.setPublicWriteAccess(false);
    newACL.setReadAccess(request.user, true);
    newACL.setWriteAccess(request.user, true);
    updateACL.setACL(newACL);
    updateACL.save(null, { useMasterKey: true });
  }
}
