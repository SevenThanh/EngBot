#include <stdio.h>
#include <stdlib.h>

#define MAX_USERNAMES 3
//392 things hehehe


struct Stack {
    char usernames[MAX_USERNAMES][50];
    int top;
};

void initialize(struct Stack *stack) {
    stack->top = -1;
}

void push(struct Stack *stack, const char *username) {
  // push a username onto the stack
    if (stack->top < MAX_USERNAMES - 1) {
        ++stack->top;
        sprintf(stack->usernames[stack->top], "%s", username);
        printf("Username %s stored.\n", username);
    } else {
        printf("stack is full bro\n");
    }
}

void displayAndPop(struct Stack *stack) {
  //pop some users from the stack
    printf("\nUsernames stored in reverse order:\n");
    while (stack->top >= 0) {
        printf("%s\n", stack->usernames[stack->top]);
        --stack->top;
    }
}

int main() {
    struct Stack usernameStack;
    initialize(&usernameStack);
  
    for (int i = 1; i <= MAX_USERNAMES; ++i) {
        char username[50];
        printf("Enter username %d: ", i);
        scanf("%s", username);
        push(&usernameStack, username);
    }

    // Display and pop usernames from the stack
    displayAndPop(&usernameStack);

    return 0;
}
