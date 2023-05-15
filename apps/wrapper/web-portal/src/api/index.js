import API_URL from "./apiUrl";
import adminCustomPost from "./adminCustomApi";

export const registerUser = async (postData) => {
  const res = await fetch.post(API_URL.auth.register, postData);
  return res;
};

export const getFormData = async (postData) => {
  const res = await adminCustomPost.post(
    API_URL.groundAnalysis.viewForm,
    postData
  );
  return res;
};

export const getOnGroundAssessorData = async () => {
  const res = await adminCustomPost.get(API_URL.groundAnalysis.list);
  return res;
};

export const getAcceptApplicant = async (postData) => {
  const res = await adminCustomPost.post(
    API_URL.acceptApplication.acceptApplicant,
    postData
  );
  return res;
};

export const getRejectApplicant = async (postData) => {
  const res = await adminCustomPost.post(
    API_URL.rejectApplication.rejectApplicant,
    postData
  );
  return res;
};

export const getOnGroundInspectionAnalysis = async () => {
  const res = await adminCustomPost.get(API_URL.groundInspectionAnalysis.getGroundInspectionAnalysis);
  return res;
};

export const getOnGroundViewStatus = async (postData) => {
  const res = await adminCustomPost.post(API_URL.ViewStatus.getViewStatus,
    postData);
    console.log("in api call", res)
  return res.data;
};