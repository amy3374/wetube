import Video from "../models/video";

export const home = (req, res) => {
  Video.find({}, (error, videos) => {});
  return res.render("home", { pageTitle: "Home" });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Videos" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};
