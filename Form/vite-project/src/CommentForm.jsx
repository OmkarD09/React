import {useFormik} from "formik";

export default function CommentForm({ onCommentSubmit }) {
    const formik = useFormik({
        initialValues: {
            name: "",
            comment: "",
        },
        onSubmit: (values, { resetForm }) => {
            onCommentSubmit(values);
            resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
            </div>
            <div>
                <label>Comment:</label>
                <textarea
                    name="comment"
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}