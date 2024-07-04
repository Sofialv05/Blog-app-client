import { SubmitButton } from "../components/Button";
import { Input, InputLarge } from "../components/Input";

export default function PostForm() {
  return (
    <form className="max-w-sm mx-auto h-screen pt-28">
      <Input label={"Title"} />
      <Input label={"ImgUrl"} />
      <div>
        <label htmlFor="category">Category</label>
        <select name="" id="">
          <option value={1}></option>
          <option value={1}></option>
          <option value={1}></option>
          <option value={1}></option>
          <option value={1}></option>
          <option value={1}></option>
        </select>
      </div>
      <InputLarge label={"Content"} />
      <SubmitButton label={"Submit"} />
    </form>
  );
}
