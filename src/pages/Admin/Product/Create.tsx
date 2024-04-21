import { useForm } from 'react-hook-form';
import { TProduct } from '../../../@types/product';

export function Create() {
  const { register, handleSubmit } = useForm<TProduct>();

  const onSubmit = (data): void => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input type="text" {...register('productName')} />
        </div>
        <div className="form-control">
          <label>description</label>
          <input type="text" {...register('description')} />
        </div>
        <div className="form-control">
          <label>productImgs</label>
          <input type="file" {...register('productImgs')} />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
