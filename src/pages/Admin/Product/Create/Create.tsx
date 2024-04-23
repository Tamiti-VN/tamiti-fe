import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import './style.css';
import { yupResolver } from '@hookform/resolvers/yup';
type TCreate = {
  productName: string;
  description: string;
  productImgs: string;
};
const validationSchema = yup.object().shape({
  productName: yup.string().required('Product name must required hahahaha'),
  description: yup.string().required('Description name must required'),
  productImgs: yup.string().url().required('hahahahahahahahahahahaha'),
});

export function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreate>({
    resolver: yupResolver(validationSchema), // yup, joi and even your own.
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
          <input type="text" {...register('productName')} />
          {errors.productName && <p className="error-message">{errors.productName.message}</p>}
        </div>
        <div className="form-control">
          <label>Description</label>
          <textarea {...register('description')} />
          {errors.description && <p className="error-message">{errors.description.message}</p>}
        </div>
        <div className="form-control">
          <label>Product thumbs</label>
          <input type="file" {...register('productImgs')} />
          {errors.productImgs && <p className="error-message">{errors.productImgs.message}</p>}
        </div>
        {/* <div className="form-control">
          <label>Product Images</label>
          <input type="file/list" />
        </div> */}
        <div className="form-control">
          <label></label>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
