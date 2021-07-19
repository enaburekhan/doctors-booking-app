import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import { signupUser, userSelector, clearState } from '../redux/userSlice';
import { useEffect } from "react";
import { toast } from "react-toastify";

const Signup = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm
  const history = useHistory();

  const { isFetching, isSuccess, isError, errorMessage } = useSelector(userSelector);

  const onSubmit = (data) => {
    dispatch(signupUser(data))    
  };

  useEffect(() => {
    return () => {
      dispatch(clearState())    
    }    
  }, [])

  useEffect(() => {

    if(isSuccess) {
      dispatch(clearState())
      history.push('/')    
    } 
    
    if(isError) {
      toast.error(errorMessage)  
      dispatch(clearState())    
    }
  }, [isSuccess, isError])
    

  return (
     <>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up to your account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
            >
              {/* Form Comes Here   */}
            </form>
            <div class="mt-6">
              <div class="relative">
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">
                    Or <Link to="login"> Login</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </>
  )
};

export default Signup;
