import { useAuth } from "../AuthProvider";
import { useRouter } from "next/router";
export default function App() {
  const { handleDeviceRegistration, user } = useAuth();
  const router = useRouter();
  const handleWebauthnRegistration = async () => {
    const isSuccessful = await handleDeviceRegistration();
    isSuccessful && router.push("login");
  };
  return (
    <div className='App grid_txt_1'>
      <h1>
        Register device for <span className='col-gold'> &lt; {"rahul@gg"}&gt; </span>{" "}
      </h1>
      <div className='u-center'>
        <button className='btn br' onClick={handleWebauthnRegistration}>
          register device
        </button>
      </div>
    </div>
  );
}