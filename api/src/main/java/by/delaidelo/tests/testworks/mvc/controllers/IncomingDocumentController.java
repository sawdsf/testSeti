package by.delaidelo.tests.testworks.mvc.controllers;

import by.delaidelo.tests.testworks.domain.IncomingDocument;
import by.delaidelo.tests.testworks.services.IncomingDocumentService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/incoming-documents")
public class IncomingDocumentController {

    private final IncomingDocumentService service;

    public IncomingDocumentController(IncomingDocumentService service) {
        this.service = service;
    }

    @GetMapping
    public List<IncomingDocument> getAll() {
        return service.findAll();
    }

    @PostMapping
    public IncomingDocument create(@RequestBody IncomingDocument doc) {
        return service.create(doc);
    }

    @PostMapping("/{id}/post")
    public IncomingDocument post(@PathVariable Long id) {
        return service.post(id);
    }

    @PostMapping("/{id}/unpost")
    public IncomingDocument unpost(@PathVariable Long id) {
        return service.unpost(id);
    }
}