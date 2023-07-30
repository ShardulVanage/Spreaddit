
import { User } from "next-auth";
import { FC } from "react";
import { AvatarFallback, Avatar } from "./ui/Avatar";
import Image from "next/image";
import { Icons } from "./Icons";
import { AvatarProps } from "@radix-ui/react-avatar";
interface UserAvatarProps extends AvatarProps {
    user: Pick<User, 'name' | 'image'>
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
    return (
        <Avatar>
            {user.image ?
                <div className="realative aspect-square h-full w-full">
                    <Image fill src={user.image} alt="profile picture" referrerPolicy="no-referrer" />
                </div>
                :
                <AvatarFallback>
                    <span className="sr-only">
                        {user?.name}
                    </span>
                    <Icons.user className="h-18 w-18" />
                </AvatarFallback>

            }
        </Avatar>
    );
}

export default UserAvatar;