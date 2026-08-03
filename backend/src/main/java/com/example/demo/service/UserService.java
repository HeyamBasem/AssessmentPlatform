package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public User login(String email, String password) {

        Optional<User> user = userRepository.findByEmail(email);

        if (user.isPresent() &&
                user.get().getPassword().equals(password)) {
            return user.get();
        }

        return null;
    }
    public User getUserById(Long id) {

        Optional<User> user = userRepository.findById(id);

        return user.orElse(null);
    }
    public User updateUser(Long id, User updatedUser) {

        Optional<User> existingUser = userRepository.findById(id);

        if (existingUser.isPresent()) {

            User user = existingUser.get();

            user.setUsername(updatedUser.getUsername());
            user.setEmail(updatedUser.getEmail());
            user.setPassword(updatedUser.getPassword());
            user.setRole(updatedUser.getRole());

            return userRepository.save(user);
        }

        return null;
    }
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
