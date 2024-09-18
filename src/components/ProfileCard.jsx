
import profilePhoto from '/src/assets/logo.png'; // Profil fotoğrafınızı doğru yolla yerleştirin

const ProfileCard = () => {
    return (
        <div className="flex items-center p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
            {/* Profil Fotoğrafı */}
            <div className="relative">
                <img
                    src={profilePhoto}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-300"
                />
            </div>

            {/* Bilgi Kartı */}
            <div className="ml-4">
                <h2 className="text-xl font-bold">Yiğit Bayrak</h2>
                <p className="text-gray-600">Web Developer</p>
                <p className="mt-2 text-gray-500">
                    Passionate about creating beautiful and functional web applications.
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;
