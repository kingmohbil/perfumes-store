type PropsType = {
  name: string;
  id: string;
  min: number;
  max: number;
};
export default function Textarea(props: PropsType) {
  return (
    <textarea
      id={props.id}
      minLength={props.min}
      maxLength={props.max}
      placeholder={props.name}
    ></textarea>
  );
}
