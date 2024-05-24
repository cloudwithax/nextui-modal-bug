'use client';
import { Select, SelectSection, SelectItem, useDisclosure, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Switch, Spinner, Textarea, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Divider, Button, Avatar } from "@nextui-org/react";
import { useState } from "react";
import type { UseDisclosureReturn } from '@nextui-org/use-disclosure';





export default function Home() {

  const settingsModal = useDisclosure();

  function SettingsModal({ disclosure }: { disclosure: UseDisclosureReturn }) {
    const { isOpen, onOpen, onOpenChange, onClose } = disclosure;


    return (
      <>
        <Modal hideCloseButton placement="center" className="dark text-foreground" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose: any) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Settings</ModalHeader>
                <ModalBody className="mb-4">
                  <div className="flex flex-row justify-between grow gap-4">
                    <p>Select</p>
                    <Select
                      size="sm"
                      className="w-32 text-wrap static bottom-0"
                    >
                      <SelectSection>
                        <SelectItem key={1} value="1">1</SelectItem>
                        <SelectItem key={2} value="2">2</SelectItem>
                        <SelectItem key={3} value="3">3</SelectItem>

                      </SelectSection>
                    </Select>
                  </div>


                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary">
                    Save
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal >
      </>
    );
  }


  return (
    <section>
      <Button onClick={settingsModal.onOpenChange}>This works</Button>


      <Dropdown className="dark text-foreground">
        <DropdownTrigger>
          <Button className="self-center hover:bg-neutral-600">
            This doesnt work
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label='actions-dropdown-menu'
          onAction={(key: any) => {
            if (key === 'settings') {
              settingsModal.onOpenChange();
            }
          }}

        >
          <DropdownItem key='settings'>
            click me
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>



      <SettingsModal disclosure={settingsModal} />
    </section>
  );
}
