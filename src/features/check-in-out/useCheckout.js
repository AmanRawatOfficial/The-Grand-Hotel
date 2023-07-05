import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: checkout, isloading: isCheckingOut } = useMutation({
        mutationFn: (bookingId) =>
            updateBooking(bookingId, {
                status: "checked-out",
            }),

        onSuccess: (data) => {
            toast.success(`Booking #${data.id} successfully checked in`);
            queryClient.invalidateQueries({ active: true });
            navigate("/");
        },

        onError: () => toast.error("There was an error while checkin in"),
    });

    return { checkout, isCheckingOut };
}
