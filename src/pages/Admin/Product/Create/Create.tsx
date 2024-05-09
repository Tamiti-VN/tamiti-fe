import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./style.css";

type TCreate = {
	productName: string;
	description: string;
	productImgs: File;
};
const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const validationSchema = z.object({
	productName: z.string().min(1, { message: "Product Name must required." }),
	description: z.string().min(1, { message: "Description must required." }),
	productImgs: z
		.any()
		.refine((file) => file[0]?.size <= MAX_FILE_SIZE, "Max image size is 2MB.")
		.refine(
			(file) => ACCEPTED_IMAGE_TYPES.includes(file[0]?.type),
			"Only .jpg, .jpeg, .png and .webp formats are supported.",
		),
});

export function Create() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TCreate>({
		resolver: zodResolver(validationSchema),
	});

	const onSubmit = (data: TCreate) => {
		console.log(data);
	};

	return (
		<div className="product-create-pages">
			<h1>Create Product</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-control">
					<label>Product Name</label>
					<input type="text" {...register("productName")} />
					{errors.productName && (
						<p className="error-message">{errors.productName.message}</p>
					)}
				</div>
				<div className="form-control">
					<label>Description</label>
					<textarea {...register("description")} />
					{errors.description && (
						<p className="error-message">{errors.description.message}</p>
					)}
				</div>
				<div className="form-control">
					<label>Product thumbs</label>
					<input type="file" {...register("productImgs")} />
					{errors.productImgs && (
						<p className="error-message">{errors.productImgs.message}</p>
					)}
				</div>
				{/* <div className="form-control">
          <label>Product Images</label>
          <input type="file/list" />
        </div> */}
				<div className="form-control">
					<label />
					<button type="submit">Add</button>
				</div>
			</form>
		</div>
	);
}
