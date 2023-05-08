    //package com.mine.employee.security;
    //
    //import org.springframework.security.core.userdetails.User;
    //import org.springframework.security.core.userdetails.UserDetails;
    //import org.springframework.security.core.userdetails.UserDetailsService;
    //import org.springframework.security.core.userdetails.UsernameNotFoundException;
    //import org.springframework.stereotype.Service;
    //
    //@Service
    //public class UserService implements UserDetailsService {
    //
    //    @Override
    //    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    //        if ("user".equals(username)) {
    //            return User.builder()
    //                    .username("user")
    //                    .password("{bcrypt}$2a$10$DprwH.g7VWghy8bET7fO9ODknvxXkYmmtD8/Yf1gSQsztwMTsP7zW")
    //                    .roles("USER")
    //                    .build();
    //        }
    //
    //        throw new UsernameNotFoundException("User not found");
    //    }
    //}