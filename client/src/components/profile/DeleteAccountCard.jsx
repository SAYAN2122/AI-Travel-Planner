import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Button from "../common/Button";

import { deleteAccount } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

function DeleteAccountCard() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "This will permanently delete your account. Continue?"
    );

    if (!confirmDelete) return;

    try {
      await deleteAccount();

      logout();

      toast.success(
        "Account deleted successfully."
      );

      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to delete account."
      );
    }
  };

  return (
    <div className="rounded-3xl border border-red-200 bg-red-50 p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-red-600">
        Danger Zone
      </h2>

      <p className="mt-4 text-slate-600">
        Permanently delete your account.
        This action cannot be undone.
      </p>

      <Button
        className="mt-8 bg-red-500 hover:bg-red-600"
        onClick={handleDelete}
      >
        <div className="flex items-center gap-2">
          <Trash2 size={18} />

          Delete Account
        </div>
      </Button>
    </div>
  );
}

export default DeleteAccountCard;